import Figure from 'modules/figures/Figure';
import Board from './Board';
class Cell {
	public available: boolean
	constructor(
		readonly x: number,
		readonly y: number,
		readonly board: Board,
		readonly color: string,
		public figure: Figure | null
	) {
		this.x = x;
		this.y = y;
		this.board = board;
		this.color = color;
		this.available = false;
		this.figure = figure;
	}

	setFigure(figure: Figure): void {
		this.figure = figure
		this.figure.cell = this;
	}

	isEmpty():boolean {		
		return this.figure === null
	}

	isEnemy(target: Cell): boolean {
    if(target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

	getCoordinateDifferenceX (target: Cell): number {
		return Math.abs(this.x - target.x);
	}
	getCoordinateDifferenceY (target: Cell): number {
		return Math.abs(this.y - target.y);
	}
	getCoordinateDifferenceAll(target: Cell) {
		return {
			absX: this.getCoordinateDifferenceX(target),
			absY: this.getCoordinateDifferenceY (target)
		}
	}

	isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false

		const min = Math.min(this.y, target.y);
		const max = Math.max(this.y, target.y);
		for(let y = min + 1; y < max; y++) {
			if(!this.board.getCell(this.x, y).isEmpty()) {
				return false
			}
		}

    return true;
  }

	isEmptyHorizontal(target: Cell): boolean {
		if (this.y !== target.y) return false

		const min = Math.min(this.x, target.x);
		const max = Math.max(this.x, target.x);
		for(let x = min + 1; x < max; x++) {
			if(!this.board.getCell(x, this.y).isEmpty()) {
				return false
			}
		}

		return true
	}

	isEmptyDiagonal(target: Cell): boolean {
		const {absX, absY} = this.getCoordinateDifferenceAll(target)
		if(absY !== absX) return false

		const minX = Math.min(target.x, this.x)
		const minY = Math.min(target.y, this.y)

		function checkCoordinate(i: number, coordinate: number, min: number) {
			if(min === coordinate) {
				return coordinate + i
			} else {
				return coordinate - i
			}
		}

		for(let i = 1; i < absY; i++) {
			const nextCell = this.board.getCell(checkCoordinate(i, target.x, minX), checkCoordinate(i, target.y, minY))
			if(!nextCell.isEmpty()) return false			
		}

		return true
	}
}

export default Cell