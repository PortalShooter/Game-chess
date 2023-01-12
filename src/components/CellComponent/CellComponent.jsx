import React from 'react'
import FigureComponent from 'components/FigureComponent';

//Styles
import styles from './cell.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

function CellComponent({data}) {
	const {color, figure} = data
	
	return (
		<div className={cn('cell', color)}>
			{figure && <FigureComponent figure={figure}/>}
		</div>
	)

}

export default CellComponent