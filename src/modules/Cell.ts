import Figure from 'modules/figures/Figure';
class Cell {
	public available: boolean
	constructor(
		readonly x: number,
		readonly y: number,
		readonly color: string,
		public figure: Figure | null
	) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.available = true;
		this.figure = figure
	}

	


}

export default Cell