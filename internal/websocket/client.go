package websocket

import (
	"log"
	"net/http"
	"tic-tac-titans/internal/game"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true // Allow all origins for development
	},
}

// Client represents a WebSocket connection
type Client struct {
	hub *Hub

	// The WebSocket connection
	conn *websocket.Conn

	// Buffered channel of outbound messages
	send chan []byte

	// Game session
	gameSession *game.GameSession
}

// ServeWs handles WebSocket requests from clients
func ServeWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	client := &Client{
		hub:         hub,
		conn:        conn,
		send:        make(chan []byte, 256),
		gameSession: game.NewGameSession(),
	}
	client.hub.register <- client

	// Send initial game state
	if state, err := client.gameSession.gameState.ToJSON(); err == nil {
		client.send <- state
	}

	// Allow collection of memory referenced by the caller by doing all work in
	// new goroutines
	go client.writePump()
	go client.readPump()
}

// readPump pumps messages from the WebSocket connection to the hub
func (c *Client) readPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()

	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}

		// Handle game message
		response, err := c.gameSession.HandleMessage(message)
		if err != nil {
			log.Printf("Error handling game message: %v", err)
			continue
		}

		// Send response back to client
		c.send <- response
	}
}

// writePump pumps messages from the hub to the WebSocket connection
func (c *Client) writePump() {
	defer func() {
		c.conn.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			if !ok {
				// The hub closed the channel
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)

			if err := w.Close(); err != nil {
				return
			}
		}
	}
} 