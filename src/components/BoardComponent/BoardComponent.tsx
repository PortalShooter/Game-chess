import React from 'react';

//Components
import Board from '../../modules/Board';
import CellComponent from 'components/CellComponent/index';

//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

const newBoard = new Board(8, 8)
const arr = newBoard.initCells()
console.log(arr);

function BoardComponent() {
  return (
    <div className={cn('board')}>
			{arr.map(row => row.map((cell: any) => <CellComponent data={cell} />))}
		</div>
  );
}

export default BoardComponent