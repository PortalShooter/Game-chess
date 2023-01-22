import Player from 'modules/Player';
import { Colors } from "modules/Colors";
import Figure, { FigureNames } from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/king.png'
import spriteBlack from 'assets/chessmen/black/king.png'

class King extends Figure {
	
	constructor(color: Colors, cell: Cell, player: Player) {
		super(color, cell, player)
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
		this.name = FigureNames.KING
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target)) {
			return false
		}

		return true
	}
}

export default King