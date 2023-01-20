import { Colors } from 'modules/Colors';
import Figure from './figures/Figure';

class Player {
	isActiveFigure: null | Figure

	constructor(readonly color: Colors) {
		this.color = color
		this.isActiveFigure = null
	}

	setActiveFigure(figure: Figure) {
		this.isActiveFigure = figure
	}
	clearActiveFigure() {
		this.isActiveFigure = null
	}
}

export default Player