import { Colors } from "modules/Colors";
import Figure, { FigureNames } from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/bishop.png'
import spriteBlack from 'assets/chessmen/black/bishop.png'

class Bishop extends Figure {
	
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
		this.name = FigureNames.BISHOP
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target)) return false
		if(this.cell.isEmptyDiagonal(target)) return true

		return false
	}
}

export default Bishop