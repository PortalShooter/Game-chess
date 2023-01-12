import { Colors } from './Colors';
import Cell from "./Cell";
import Pawn from "./figures/Pawn";
export default class Board {
	private readonly _fieldSize: number;
	cells: Cell[][]

	constructor(fieldSize: number ) {
		this._fieldSize = fieldSize
		this.cells = []
	}

	initCells() {
		for(let i = 1; i <= this._fieldSize; i++) {
			const row = []
			for(let u = 1; u <= this._fieldSize; u++) {
				const color = (i + u) % 2 ? Colors.BLACK : Colors.WHITE
				row.push(new Cell(i, u, color, null))
			}
			this.cells.push(row)
		}
		return this.cells
	}

	setFigure() {
		new Pawn(1,2,Colors.WHITE)
	}

}