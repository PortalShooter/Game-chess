export default class Figure {
	constructor() {
		if (this.constructor == Figure) {
      throw new Error("Abstract classes can't be instantiated.");
    }
	}
}