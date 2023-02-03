import React, { useEffect, useState } from 'react';
import Cell from 'modules/Cell';
import Board from 'modules/Board';
import 'helper/minViewPort';
//Components
import CellComponent from 'components/CellComponent/index';
//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
import Player from 'modules/Player';
const cn = classnames.bind(styles);

interface Props {
	board: Board,
	setBoard: (board: Board) => void
	activePlayer: Player,
	swapActivePlayer: () => void
}

function BoardComponent({board, setBoard, activePlayer, swapActivePlayer}: Props) {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	useEffect(() => {
		highlightCells()
	}, [selectedCell])

	function click(cell: Cell) {
		if(selectedCell === cell) {
			setSelectedCell(null)
		} else if(cell.figure && cell.figure.color === activePlayer.color) {
			setSelectedCell(cell)
		}

		if(selectedCell && selectedCell !== cell && cell.available) {
			selectedCell.figure?.moveFigure(cell)
			setSelectedCell(null)
			swapActivePlayer()
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
							click={click} 
						/>
					)
				)}
			</div>
		</div>
    
  );
}

export default BoardComponent