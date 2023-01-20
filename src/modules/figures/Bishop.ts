import Player from 'modules/Player';
import { Colors } from "modules/Colors";
import Figure from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/bishop.png'
import spriteBlack from 'assets/chessmen/black/bishop.png'

class Bishop extends Figure {
	
	constructor(color: Colors, cell: Cell, player: Player) {
		super(color, cell, player)
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
	}
}

export default Bishop