import React from 'react';
import BoardComponent from '../BoardComponent';
import Game from 'modules/Game';

function GameComponent() {
	

	function startGame() {
		const newGame = new Game()
		const arr = newGame.startGame()
	}
  return (
    <div className="game">
			<div className='game__timer'></div>
			<button className='game__start' onClick={startGame}>Начать игру</button>
      <BoardComponent />
    </div>
  );
}

export default GameComponent;
