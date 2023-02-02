const root: HTMLElement =  document.documentElement

export const setCellSize = (size: number) => {
	root.style.setProperty('--cell-size', size / 8 + 'px');
}

export const getCellSize = () => {
	return root.style.getPropertyValue('--cell-size');
}

