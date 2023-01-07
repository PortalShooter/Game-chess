import { Cell } from "./Cell";

export default class Board {
	readonly _fieldSize: number;
	cells: [any]

	constructor(fieldSize: number ) {
		this._fieldSize = fieldSize
		this.cells = [[]]
	}

	initCells() {
		for(let i = 1; i <= this._fieldSize; i++) {
			const row = []
			for(let u = 1; u <= this._fieldSize; u++) {
				const color = (i + u) % 2 ? 'black' : 'white'
		
				row.push(new Cell(i, u, color, true))
			}
			this.cells.push(row)
		}
		return this.cells
	}

}