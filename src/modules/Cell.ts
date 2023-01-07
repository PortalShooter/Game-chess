export class Cell {
	readonly _width: number;
	readonly _height: number;
	readonly _color: string;
	_available: boolean;

	constructor(width: number, height: number, color: string, available: boolean) {
		this._width = width;
		this._height = height;
		this._color = color;
		this._available = available;
	}


}