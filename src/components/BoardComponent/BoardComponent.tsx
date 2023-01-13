import React from 'react';
import Cell from 'modules/Cell';
//Components
import Board from '../../modules/Board';
import CellComponent from 'components/CellComponent/index';
//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);


const newBoard = new Board()
const arrCells = newBoard.initCells()
newBoard.setFigures()

function BoardComponent() {
  return (
    <div className={cn('board')}>
			{arrCells.map(row => row.map((cell: Cell, index: number) => <CellComponent key={index} data={cell} />))}
		</div>
  );
}

export default BoardComponent