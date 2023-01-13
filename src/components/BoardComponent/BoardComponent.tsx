import React from 'react';
import Cell from 'modules/Cell';
//Components
import CellComponent from 'components/CellComponent/index';
//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

interface Props {
	arrCells: Cell[][]
}

function BoardComponent({arrCells}: Props) {
  return (
    <div className={cn('board')}>
			{arrCells.map(row => row.map((cell: Cell, index: number) => <CellComponent key={index} data={cell} />))}
		</div>
  );
}

export default BoardComponent