# Tic-Tac-Titans

A modern implementation of Tic-Tac-Toe with AI opponent, built with Go and WebSocket.

## Project Structure

```
.
├── backend/
│   ├── cmd/
│   │   └── server/         # Main server application
│   ├── internal/
│   │   ├── game/          # Game logic implementation
│   │   └── websocket/     # WebSocket server implementation
│   └── go.mod             # Go module definition
└── frontend/              # Next.js frontend (to be implemented)
```

## Features

- 5x5 Tic-Tac-Toe board
- Real-time gameplay using WebSocket
- AI opponent with strategic moves
- Concurrent game sessions
- JSON-based game state communication

## Backend Setup

1. Install Go (version 1.16 or later)
2. Install dependencies:
   ```bash
   go mod tidy
   ```
3. Build and run the server:
   ```bash
   go build ./cmd/server
   ./server
   ```

## API

### WebSocket Endpoint
- `ws://localhost:8080/ws`

### Message Format

#### Player Move
```json
{
  "row": 0,
  "col": 0
}
```

#### Game State Response
```json
{
  "board": [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ],
  "currentPlayer": "X",
  "winner": "",
  "gameOver": false
}
```

## Development

### Dependencies
- github.com/gorilla/websocket

### Building
```bash
go build ./cmd/server
```

### Running
```bash
./server
```

The server will start on port 8080 and serve the frontend from the `frontend/dist` directory. 