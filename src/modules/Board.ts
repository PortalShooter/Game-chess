import { Cell } from "./Cell";

export default class Board {
	readonly _numberRows: number;
	readonly _numberColumns: number;
	cells: [any]


	constructor(numberRows: number, numberColumns: number, ) {
		this._numberRows = numberRows
		this._numberColumns = numberColumns
		this.cells = [[]]
	}

	initCells() {
		for(let i = 1; i <= this._numberRows; i++) {
			const row = []
			for(let u = 1; u <= this._numberColumns; u++) {
				const color = (i + u) % 2 ? 'black' : 'white'

				row.push(new Cell(64, 64, color, true))
			}
			this.cells.push(row)
		}
		return this.cells
	}

}