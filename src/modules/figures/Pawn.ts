import { Colors } from './../Colors';
import Figure from "modules/figures/Figure";
import spriteWhite from 'assets/chessmen/white/pawn.png'
import spriteBlack from 'assets/chessmen/black/pawn.png'

export default class Pawn extends Figure {
	firstMove: boolean
	sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
	
	constructor(x: number, y: number, color: Colors) {
		super(x, y, color)
		this.firstMove = true
	}
}