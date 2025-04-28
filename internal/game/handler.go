package game

import (
	"encoding/json"
	"log"
	"sync"
)

// GameSession represents a game session between a player and AI
type GameSession struct {
	gameState *GameState
	mu        sync.Mutex
}

// NewGameSession creates a new game session
func NewGameSession() *GameSession {
	return &GameSession{
		gameState: NewGame(),
	}
}

// HandleMessage processes incoming WebSocket messages
func (gs *GameSession) HandleMessage(message []byte) ([]byte, error) {
	gs.mu.Lock()
	defer gs.mu.Unlock()

	var move struct {
		Row int `json:"row"`
		Col int `json:"col"`
	}
	if err := json.Unmarshal(message, &move); err != nil {
		log.Printf("Error unmarshaling move: %v", err)
		return nil, err
	}

	// Make player move
	if !gs.gameState.MakeMove(move.Row, move.Col, "X") {
		return gs.gameState.ToJSON()
	}

	// Make AI move if game is not over
	if !gs.gameState.GameOver {
		aiRow, aiCol := gs.gameState.MakeAIMove()
		if aiRow != -1 && aiCol != -1 {
			gs.gameState.MakeMove(aiRow, aiCol, "O")
		}
	}

	return gs.gameState.ToJSON()
}

// ResetGame resets the game state
func (gs *GameSession) ResetGame() {
	gs.mu.Lock()
	defer gs.mu.Unlock()
	gs.gameState = NewGame()
} 