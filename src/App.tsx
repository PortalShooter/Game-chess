import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import Board from 'modules/Board';
import Player from 'modules/Player';
import { Colors } from 'modules/Colors';

export const PlayerWhite = new Player(Colors.WHITE)
export const PlayerBlack = new Player(Colors.BLACK)

function App() {
	const [board, setBoard] = useState(new Board())
  const [activePlayer, setActivePlayer] = useState<Player>(PlayerWhite);

	useEffect(() => {
		restart()
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.setFigures()
		setBoard(newBoard)
	}

	function swapActivePlayer() {
		setActivePlayer(prevState => prevState === PlayerWhite ? PlayerBlack : PlayerWhite)
	}

  return (
    <div className="app">
      <BoardComponent 
				board={board}
				setBoard={setBoard}
				activePlayer={activePlayer}
				swapActivePlayer={swapActivePlayer}
			/>
    </div>
  );
}

export default App;
