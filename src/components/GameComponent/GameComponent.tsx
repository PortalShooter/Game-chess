import React, { useState } from 'react';
import BoardComponent from '../BoardComponent';
import Game from 'modules/Game';
import Cell from 'modules/Cell';

function GameComponent() {
	const newGame = new Game()
	const [arrCells, setArrCells] = useState<null | Cell[][]>(null)

	function startGame() {
		setArrCells(newGame.startGame())
	}
	
  return (
    <div className="game">
			<div className='game__timer'></div>
			<button className='game__start' onClick={startGame}>Начать игру</button>
			{arrCells && <BoardComponent arrCells={arrCells} />}
    </div>
  );
}

export default GameComponent;
