import { Colors } from './Colors';
import Cell from "./Cell";
import Player from './Player';
// Figure models
import Pawn from "./figures/Pawn";
import King from './figures/King';
import Queen from './figures/Queen';
import Bishop from './figures/Bishop';
import Knight from './figures/Knight';
import Rook from './figures/Rook';
export default class Board {
	cells: Cell[][]
	player1: Player
	player2: Player

	constructor() {
		this.cells = []
		this.player1 = new Player(Colors.WHITE)
		this.player2 = new Player(Colors.BLACK)
	}

	initCells() {
		for(let x = 0; x < 8; x++) {
			const row = []
			for(let y = 0; y < 8; y++) {
				const color = (x + y) % 2 ? Colors.BLACK : Colors.WHITE
				row.push(new Cell(y, x, this, color, null))
			}
			this.cells.push(row)
		}
		return this.cells
	}

	public getCopyBoard() {
		const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
	}

	public clearCells() {
		this.cells.forEach(row => {
			row.forEach(cell => {
				cell.available = false
			})
		})
	}

	public setCells(cells:Cell[][]) {
		this.cells = cells
	}

	public getCell(x: number, y: number):Cell {
		return this.cells[y][x]
	}

	getPlayer() {
		return this.player1
	}

	setFigures() {
		this.setPawns()
		this.setKings()
		this.setQueens()
		this.setBishop()
		this.setKnights()
		this.setRooks()
	}

	private setPawns() {
		for(let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, this.getCell(i, 1), this.player2)
			new Pawn(Colors.WHITE, this.getCell(i, 6), this.player1)
		}
	}
	private setKings() {
		new King(Colors.BLACK, this.getCell(4, 0), this.player2)
		new King(Colors.WHITE, this.getCell(4, 7), this.player1)
	}
	private setQueens() {
		new Queen(Colors.BLACK, this.getCell(3, 0), this.player1)
		new Queen(Colors.WHITE, this.getCell(3, 7), this.player1)
	}
	private setBishop() {
		new Bishop(Colors.BLACK, this.getCell(2, 0), this.player1)
		new Bishop(Colors.BLACK, this.getCell(5, 0), this.player1)
		new Bishop(Colors.WHITE, this.getCell(2, 7), this.player1)
		new Bishop(Colors.WHITE, this.getCell(5, 7), this.player1)
	}
	private setKnights() {
		new Knight(Colors.BLACK, this.getCell(1, 0), this.player1)
		new Knight(Colors.BLACK, this.getCell(6, 0), this.player1)
		new Knight(Colors.WHITE, this.getCell(1, 7), this.player1)
		new Knight(Colors.WHITE, this.getCell(6, 7), this.player1)
	}
	private setRooks() {
		new Rook(Colors.BLACK, this.getCell(0, 0), this.player1)
		new Rook(Colors.BLACK, this.getCell(7, 0), this.player1)
		new Rook(Colors.WHITE, this.getCell(0, 7), this.player1)
		new Rook(Colors.WHITE, this.getCell(7, 7), this.player1)
	}
}