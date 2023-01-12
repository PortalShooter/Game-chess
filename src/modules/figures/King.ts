import { Colors } from "modules/Colors";
import Figure from "./Figure";
import Cell from "modules/Cell";
import spriteWhite from 'assets/chessmen/white/king.png'
import spriteBlack from 'assets/chessmen/black/king.png'

class King extends Figure {
	sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;

	constructor(color: Colors, cell: Cell) {
		super(color, cell)
	}
}

export default King