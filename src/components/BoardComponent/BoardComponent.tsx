import React from 'react';
//Components
import Board from '../../modules/Board';
import CellComponent from 'components/CellComponent/index';
//Variables
import {fieldSize} from 'options'
//Styles
import styles from './board.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

const newBoard = new Board(fieldSize).initCells()

function BoardComponent() {
  return (
    <div className={cn('board')}>
			{newBoard.map(row => row.map((cell: any, index: number) => <CellComponent key={index} data={cell} />))}
		</div>
  );
}

export default BoardComponent