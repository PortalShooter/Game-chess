const root: HTMLElement =  document.documentElement

const setCellSize = () => {
	const minValue = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
	root.style.setProperty('--cell-size', minValue / 8 + 'px');
}

setCellSize()

window.addEventListener('resize', setCellSize)

export {}