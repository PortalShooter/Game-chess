import { Colors } from 'modules/Colors';
import Player from './Player';
import Board from './Board';

class Game {
	player1 = new Player(Colors.WHITE)
	player2 = new Player(Colors.BLACK)

	public getPlayer(color: Colors) {
		return color === Colors.WHITE ? this.player1 : this.player2
	}

	startGame() {
		const newBoard = new Board()
		const arrCells = newBoard.initCells()
		newBoard.setFigures()
		return arrCells
	}
}

export default Game