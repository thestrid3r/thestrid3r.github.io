package main

import (
	"log"
	"net/http"
	"tic-tac-titans/internal/websocket"
)

func main() {
	// Create a new WebSocket hub
	hub := websocket.NewHub()
	go hub.Run()

	// Serve static files
	fs := http.FileServer(http.Dir("../../frontend/dist"))
	http.Handle("/", fs)

	// WebSocket endpoint
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		websocket.ServeWs(hub, w, r)
	})

	// Start the server
	log.Println("Server starting on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
} 