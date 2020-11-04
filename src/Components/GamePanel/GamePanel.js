import React from 'react'


export const GamePanel = ({score, bestScore, newGameFunction}) => (
  <div className="gamePanel">
    <div className="gamePanel__scores">
      <h1>2048</h1>
      <h2>Score:{score}</h2>
      <h3>Best Score:{bestScore}</h3>
    </div>
    <button
      type="button"
      onClick={() => newGameFunction()}
      name="btn"
      id="newGame"
    >
      NEW GAME
    </button>
  </div>
)