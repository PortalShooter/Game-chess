import { Colors } from 'modules/Colors';

class Player {
	constructor(
		readonly color: Colors
	) {
		this.color = color;
	}

	isActiveFigure() {
		return 123
	}
}

export default Player