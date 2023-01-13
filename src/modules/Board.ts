import { Colors } from './Colors';
import Cell from "./Cell";
import Pawn from "./figures/Pawn";
import King from './figures/King';
import Queen from './figures/Queen';
import Bishop from './figures/Bishop';
import Knight from './figures/Knight';
import Rook from './figures/Rook';
export default class Board {
	cells: Cell[][]

	constructor() {
		this.cells = []
	}

	initCells() {
		for(let i = 1; i <= 8; i++) {
			const row = []
			for(let u = 1; u <= 8; u++) {
				const color = (i + u) % 2 ? Colors.BLACK : Colors.WHITE
				row.push(new Cell(i, u, color, null))
			}
			this.cells.push(row)
		}
		return this.cells
	}

	setFigures() {
		this.setPawns()
		this.setKings()
		this.setQueens()
		this.setBishop()
		this.setKnights()
		this.setRooks()
	}

	setPawns() {
		for(let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, this.cells[1][i])
			new Pawn(Colors.WHITE, this.cells[6][i])
		}
	}
	setKings() {
		new King(Colors.BLACK, this.cells[0][4])
		new King(Colors.WHITE, this.cells[7][4])
	}
	setQueens() {
		new Queen(Colors.BLACK, this.cells[0][3])
		new Queen(Colors.WHITE, this.cells[7][3])
	}
	setBishop() {
		new Bishop(Colors.BLACK, this.cells[0][2])
		new Bishop(Colors.BLACK, this.cells[0][5])
		new Bishop(Colors.WHITE, this.cells[7][2])
		new Bishop(Colors.WHITE, this.cells[7][5])
	}
	setKnights() {
		new Knight(Colors.BLACK, this.cells[0][1])
		new Knight(Colors.BLACK, this.cells[0][6])
		new Knight(Colors.WHITE, this.cells[7][1])
		new Knight(Colors.WHITE, this.cells[7][6])
	}
	setRooks() {
		new Rook(Colors.BLACK, this.cells[0][0])
		new Rook(Colors.BLACK, this.cells[0][7])
		new Rook(Colors.WHITE, this.cells[7][0])
		new Rook(Colors.WHITE, this.cells[7][7])
	}
}