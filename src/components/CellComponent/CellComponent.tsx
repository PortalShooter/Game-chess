import React, { useEffect, useState } from 'react'
import FigureComponent from 'components/FigureComponent'
import Cell from 'modules/Cell'
import Board from 'modules/Board'
// Styles
import styles from './cell.module.scss'
import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

interface CellProps {
	cell: Cell
	board: Board,
	selected: boolean,
	click: (cell: Cell) => void
}

function CellComponent({ cell, board, selected, click }: CellProps) {
	const { color, figure } = cell

	return (
		<div 
			className={
				cn(
					'cell',
					color,
					cell.available && cell.figure && 'can-attack',
					selected && 'selected'
				)} 
			onClick={() => {click(cell)}}
		>
			{/* <div style={{color: 'blue'}} >x:{cell.x},y{cell.y}</div> */}
			{cell.available && !cell.figure && <div className={cn('cell__abailable')} /> }
			{figure && <FigureComponent figure={figure}/>}
		</div>
	)

}

export default CellComponent