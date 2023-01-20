import { Colors } from './../Colors';
import Figure from "modules/figures/Figure";
import spriteWhite from 'assets/chessmen/white/pawn.png'
import spriteBlack from 'assets/chessmen/black/pawn.png'
import Cell from 'modules/Cell';
import Player from 'modules/Player';

export default class Pawn extends Figure {
	firstMove: boolean
	
	constructor(color: Colors, cell: Cell, player: Player) {
		super(color, cell, player)
		this.firstMove = true
		this.sprite = this.color === Colors.WHITE ? spriteWhite : spriteBlack;
	}
}