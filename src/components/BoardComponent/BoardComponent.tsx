import React, { useEffect, useState } from 'react';
import Cell from 'modules/Cell';
import Board from 'modules/Board';
import svg from 'assets/coordinates.svg'
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
		highlightCells()
	}, [selectedCell])


	function click(cell: Cell) {
		if(selectedCell === cell) {
			setSelectedCell(null)
		} else if(cell.figure) {
			setSelectedCell(cell)
		}

		if(selectedCell && selectedCell !== cell && cell.available) {
			selectedCell.figure?.moveFigure(cell)
			setSelectedCell(null)
		}

		//Где то здесь должна быть проверка на возможность хода
		/**
		 * Хотя вообще на все доступные клетки мы можем ходить,
		 * а значит и проверка глобальная не нужна.
		 */
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
		if(!selectedCell) {
			board.clearCells()
		}
		updateBoard()
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

  return (
		<div className={cn('board__outside')}>

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
		</div>
    
  );
}

export default BoardComponent