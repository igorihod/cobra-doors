export const pxToVw = (px, screenWidth = 1920) => {
	return (px / screenWidth) * 100 + 'vw'
}
export function pxToRem(pxValue, baseFontSize = 16) {
	return `${pxValue / baseFontSize}rem`
}
