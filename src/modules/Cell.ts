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
		this.available = false;
		this.figure = figure
	}

	setFigure(figure: Figure) {
		this.figure = figure
		this.figure.cell = this;
	}
}

export default Cell