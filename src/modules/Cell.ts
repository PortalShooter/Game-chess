export class Cell {
	readonly _x: number;
	readonly _y: number;
	readonly _color: string;
	_available: boolean;

	constructor(x: number, y: number, color: string, available: boolean) {
		this._x = x;
		this._y = y;
		this._color = color;
		this._available = available;
	}


}