import React from 'react'
import FigureComponent from 'components/FigureComponent'
import Cell from 'modules/Cell'
// Styles
import styles from './cell.module.scss'
import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

interface Props {
	data: Cell
}

function CellComponent({ data }: Props) {
	const { color, figure } = data
	
	return (
		<div className={cn('cell', color)}>
			{figure && <FigureComponent figure={figure}/>}
		</div>
	)

}

export default CellComponent