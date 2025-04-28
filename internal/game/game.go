package game

import (
	"encoding/json"
	"math/rand"
	"time"
)

// GameState represents the current state of the game
type GameState struct {
	Board      [][]string `json:"board"`
	CurrentPlayer string `json:"currentPlayer"`
	Winner     string    `json:"winner"`
	GameOver   bool      `json:"gameOver"`
}

// NewGame creates a new game state
func NewGame() *GameState {
	board := make([][]string, 5)
	for i := range board {
		board[i] = make([]string, 5)
	}
	return &GameState{
		Board:      board,
		CurrentPlayer: "X",
		Winner:     "",
		GameOver:   false,
	}
}

// MakeMove makes a move on the board
func (g *GameState) MakeMove(row, col int, player string) bool {
	if g.GameOver || g.Board[row][col] != "" {
		return false
	}

	g.Board[row][col] = player
	g.checkWinner()
	if !g.GameOver {
		g.switchPlayer()
	}
	return true
}

// MakeAIMove makes a move for the AI player
func (g *GameState) MakeAIMove() (int, int) {
	// Simple AI: first try to win, then block, then take center, then random
	moves := g.getAvailableMoves()
	if len(moves) == 0 {
		return -1, -1
	}

	// Try to find winning move
	for _, move := range moves {
		g.Board[move[0]][move[1]] = "O"
		if g.checkWinner() && g.Winner == "O" {
			g.Board[move[0]][move[1]] = ""
			return move[0], move[1]
		}
		g.Board[move[0]][move[1]] = ""
	}

	// Try to block opponent
	for _, move := range moves {
		g.Board[move[0]][move[1]] = "X"
		if g.checkWinner() && g.Winner == "X" {
			g.Board[move[0]][move[1]] = ""
			return move[0], move[1]
		}
		g.Board[move[0]][move[1]] = ""
	}

	// Take center if available
	if g.Board[2][2] == "" {
		return 2, 2
	}

	// Random move
	rand.Seed(time.Now().UnixNano())
	move := moves[rand.Intn(len(moves))]
	return move[0], move[1]
}

func (g *GameState) getAvailableMoves() [][]int {
	var moves [][]int
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			if g.Board[i][j] == "" {
				moves = append(moves, []int{i, j})
			}
		}
	}
	return moves
}

func (g *GameState) switchPlayer() {
	if g.CurrentPlayer == "X" {
		g.CurrentPlayer = "O"
	} else {
		g.CurrentPlayer = "X"
	}
}

func (g *GameState) checkWinner() bool {
	// Check rows
	for i := 0; i < 5; i++ {
		for j := 0; j < 3; j++ {
			if g.Board[i][j] != "" &&
				g.Board[i][j] == g.Board[i][j+1] &&
				g.Board[i][j] == g.Board[i][j+2] {
				g.Winner = g.Board[i][j]
				g.GameOver = true
				return true
			}
		}
	}

	// Check columns
	for i := 0; i < 3; i++ {
		for j := 0; j < 5; j++ {
			if g.Board[i][j] != "" &&
				g.Board[i][j] == g.Board[i+1][j] &&
				g.Board[i][j] == g.Board[i+2][j] {
				g.Winner = g.Board[i][j]
				g.GameOver = true
				return true
			}
		}
	}

	// Check diagonals
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if g.Board[i][j] != "" &&
				g.Board[i][j] == g.Board[i+1][j+1] &&
				g.Board[i][j] == g.Board[i+2][j+2] {
				g.Winner = g.Board[i][j]
				g.GameOver = true
				return true
			}
		}
	}

	// Check anti-diagonals
	for i := 0; i < 3; i++ {
		for j := 2; j < 5; j++ {
			if g.Board[i][j] != "" &&
				g.Board[i][j] == g.Board[i+1][j-1] &&
				g.Board[i][j] == g.Board[i+2][j-2] {
				g.Winner = g.Board[i][j]
				g.GameOver = true
				return true
			}
		}
	}

	// Check for draw
	draw := true
	for i := 0; i < 5; i++ {
		for j := 0; j < 5; j++ {
			if g.Board[i][j] == "" {
				draw = false
				break
			}
		}
	}
	if draw {
		g.GameOver = true
		return true
	}

	return false
}

// ToJSON converts the game state to JSON
func (g *GameState) ToJSON() ([]byte, error) {
	return json.Marshal(g)
} 