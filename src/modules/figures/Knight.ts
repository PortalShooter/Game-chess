import Player from 'modules/Player';
import { Colors } from "modules/Colors";
import Figure, { FigureNames } from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/knight.png'
import spriteBlack from 'assets/chessmen/black/knight.png'

class Knight extends Figure {
	
	constructor(color: Colors, cell: Cell, player: Player) {
		super(color, cell, player)
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
		this.name = FigureNames.KNIGHT
	}

	canMove(target: Cell): boolean {
		if(!super.canMove(target)) return false

		const absX = Math.abs(this.cell.x - target.x);
		const absY = Math.abs(this.cell.y - target.y);

		return (absX === 1 && absY === 2) || (absY === 1 && absX === 2)
	}
}

export default Knight