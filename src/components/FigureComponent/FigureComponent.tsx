import React from 'react';
import Figure from 'modules/figures/Figure';
//Styles
import styles from './figure.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

const FigureComponent:React.FC<{figure: Figure}> = ({figure}) => {
	const sprite = figure.getSptire()
	
  return (
    <div className={cn('figure')}>
			{sprite ? <img className={cn('figure__img')} src={sprite} alt="" /> : null}
		</div>
  );
}

export default FigureComponent