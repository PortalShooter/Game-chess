import React, { useEffect, useState } from 'react';
import Cell from 'modules/Cell';
import Board from 'modules/Board';
//Components
import CellComponent from 'components/CellComponent/index';
//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

interface Props {
	board: Board,
	setBoard: (board: Board) => void
}

function BoardComponent({board, setBoard}: Props) {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	useEffect(() => {
		updateBoard()
	}, [selectedCell])


	function click(cell: Cell) {
		if(selectedCell === cell) {
			setSelectedCell(null)
		} else if(cell.figure) {
			setSelectedCell(cell)
		}

		// highlightCells()

		if(selectedCell && selectedCell !== cell) {
			selectedCell.figure?.moveFigure(cell)
			setSelectedCell(null)
		}
	}

	//Проверяем каждую клетку, можно ли на нее походить
	function highlightCells() {
		if(selectedCell?.figure) {
			const figure = selectedCell.figure
			board.cells.forEach(row => {
			row.forEach(cell => {
				cell.available = figure.canMove(cell)
			})
		})
		}
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}


  return (
    <div className={cn('board')}>
			{board.cells.map(row =>
				row.map((cell: Cell, index: number) =>
					<CellComponent 
						key={index} 
						cell={cell} 
						selected={selectedCell === cell} 
						board={board}
						click={click} 
					/>
				)
			)}
		</div>
  );
}

export default BoardComponent