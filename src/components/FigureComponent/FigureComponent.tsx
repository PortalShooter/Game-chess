import React, { useState } from 'react';
import Figure from 'modules/figures/Figure';
//Styles
import styles from './figure.module.scss';
import classnames from 'classnames/bind';
import Game from 'modules/Game';
const cn = classnames.bind(styles);

const FigureComponent:React.FC<{figure: Figure}> = ({figure}) => {
	const sprite = figure.getSptire()
	const [isActive, setIsActive] = useState(false)

  return (
    <div
		onClick={() => {
			// setIsActive((prevState) => !prevState)
			
		}} 
		className={cn('figure', isActive && 'is-active')}>
		{sprite ? <img className={cn('figure__img')} src={sprite} alt="" /> : null}
	</div>
  );
}

export default FigureComponent