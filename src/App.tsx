import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import Board from 'modules/Board';
import Player from 'modules/Player';
import { Colors } from 'modules/Colors';
import Game from 'modules/Game';

export const PlayerWhite = new Player(Colors.WHITE)
export const PlayerBlack = new Player(Colors.BLACK)

function App() {
	const [game, setGame] = useState(new Game());
	const [board, setBoard] = useState(new Board({game: game}))
  const [activePlayer, setActivePlayer] = useState<Player>(PlayerWhite);



	useEffect(() => {
		restart()
	}, [])

	function restart() {
		const newGame = new Game();
		newGame.startGame()
		setGame(newGame);
	}

	function swapActivePlayer() {
		setActivePlayer(prevState => prevState === PlayerWhite ? PlayerBlack : PlayerWhite)
	}

	useEffect(() => {
console.log(game);
	}, [game])

  return (
    <div className="app">
			<button onClick={restart}>Restart</button>

      <BoardComponent 
				board={game.board}
				setBoard={setBoard}
				activePlayer={activePlayer}
				swapActivePlayer={swapActivePlayer}
			/>
    </div>
  );
}

export default App;
