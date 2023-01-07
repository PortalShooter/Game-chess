import React from 'react'

//Styles
import styles from './cell.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

function CellComponent({data}) {
	
	return (
		<div className={cn('cell', data._color)}></div>
	)

}

export default CellComponent