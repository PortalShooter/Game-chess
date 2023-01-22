import { Colors } from "modules/Colors";
import Figure, { FigureNames } from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/queen.png'
import spriteBlack from 'assets/chessmen/black/queen.png'
import Player from "modules/Player";

class Queen extends Figure {
	
	constructor(color: Colors, cell: Cell, player: Player) {
		super(color, cell, player)
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
		this.name = FigureNames.QUEEN
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target))return false
		if(this.cell.isEmptyVertical(target)) return true
		if(this.cell.isEmptyHorizontal(target)) return true
		if(this.cell.isEmptyDiagonal(target)) return true

		return false
	}
}

export default Queen