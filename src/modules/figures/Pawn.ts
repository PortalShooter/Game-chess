import { Colors } from './../Colors';
import Figure, { FigureNames } from "./Figure";
import spriteWhite from 'assets/chessmen/white/pawn.png'
import spriteBlack from 'assets/chessmen/black/pawn.png'
import Cell from 'modules/Cell';

export default class Pawn extends Figure {
	firstMove: boolean
	
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.firstMove = true
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
		this.name = FigureNames.PAWN
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target)) return false

		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
		const directionFirstMove = direction * 2

		if((target.y === this.cell.y + direction || this.firstMove
		&& (target.y === this.cell.y + directionFirstMove))
		&& target.x === this.cell.x
		&& this.cell.board.getCell(target.x, target.y).isEmpty()) {
			return true
		}

		return target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target);
	}

	moveFigure(target: Cell) {
		super.moveFigure(target)

		if(this.firstMove) {
			this.firstMove = false
		}
	}
}