import { Colors } from './../Colors';
import Figure from "modules/figures/Figure";
import spriteWhite from 'assets/chessmen/white/pawn.png'
import spriteBlack from 'assets/chessmen/black/pawn.png'
import Cell from 'modules/Cell';

export default class Pawn extends Figure {
	firstMove: boolean
	sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
	
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.firstMove = true
	}
}