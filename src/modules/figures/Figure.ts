import Cell from 'modules/Cell';
import { Colors } from '../Colors';
import Player from 'modules/Player';
abstract class Figure {
	protected sprite: string | null
	moveAvailable: boolean // Определяет может ли ходить фигура.Если убрать фигуру будет ли король под угрозой?

	constructor(
		readonly color: Colors,
		public cell: Cell,
		readonly player: Player
	) {
		this.color = color
		this.sprite = null
		this.moveAvailable = true
		this.cell = cell
		this.cell.figure = this
	}

	getSptire() {
		return this.sprite
	}

	canMove(cell: Cell) {

		return true
	}

	moveFigure(target: Cell) {
		target.figure = this
		this.cell.figure = null
		this.cell = target
	}

}

export default Figure