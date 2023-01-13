import Cell from 'modules/Cell';
import { Colors } from '../Colors';
abstract class Figure {
	protected sprite: string | null
	moveAvailable: boolean // Определяет может ли ходить фигура.Если убрать фигуру будет ли король под угрозой?
	public isActive: boolean
	
	constructor(
		// protected readonly x: number, 
		// protected readonly y: number,
		readonly color: Colors,
		public cell: Cell
	) {
		// this.x = x
		// this.y = y
		this.color = color
		this.sprite = null
		this.moveAvailable = true

		this.cell.figure = this
		this.cell.available = false
		this.isActive = false
	}

	getSptire() {
		return this.sprite
	}

	move() {
		return 123
	}
}

export default Figure