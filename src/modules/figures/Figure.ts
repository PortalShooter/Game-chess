import Cell from 'modules/Cell';
import { Colors } from '../Colors';
import Player from 'modules/Player';

export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}
abstract class Figure {
	protected sprite: string | null
	moveAvailable: boolean // Определяет может ли ходить фигура.Если убрать фигуру будет ли король под угрозой?
	name: FigureNames;

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
		this.name = FigureNames.FIGURE
	}

	getSptire() {
		return this.sprite
	}

	canMove(target: Cell) {
		if(target.figure?.color === this.color) {
			return false
		}

		// Временно
		if(target.figure?.name === FigureNames.KING) {
			return false
		}

		return true
	}

	moveFigure(target: Cell) {
		target.figure = this
		this.cell.figure = null
		this.cell = target
	}

}

export default Figure