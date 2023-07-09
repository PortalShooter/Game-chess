import Board from "./Board";

interface ICoordinates {
	x: number; 
	y: number;
}

export default class Game {
	public whiteKingPosition: ICoordinates;
	public blackKingPosition: ICoordinates;
	board: Board;

	constructor() {
		this.whiteKingPosition = { x: 4, y: 0 };
		this.blackKingPosition = { x: 4, y: 7 };
		this.board = new Board({game: this});
	}

	startGame() {
		this.board.initCells();
		this.board.setFigures();
	}

	setWhiteKingPosition(newPosition: ICoordinates) {
		this.whiteKingPosition = newPosition;
	}

	setBlackKingPosition(newPosition: ICoordinates) {
		this.blackKingPosition = newPosition;
	}

}