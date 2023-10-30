import { cubicInOut } from 'svelte/easing'

export function hslide(node, {
	delay = 0,
	duration = 100,
	easing = cubicInOut
}) {
	const style = getComputedStyle(node);
	const width = parseFloat(style.width);
	const padding_left = parseFloat(style.paddingLeft);
	const padding_right = parseFloat(style.paddingRight);
	const margin_left = parseFloat(style.marginLeft);
	const margin_right = parseFloat(style.marginRight);
	const border_left_width = parseFloat(style.borderLeftWidth);
	const border_right_width = parseFloat(style.borderRightWidth);

	return {
		delay,
		duration,
		easing,
		css: t =>
			`overflow: hidden;` +
			`width: ${t * width}px;` +
			`padding-left: ${t * padding_left}px;` +
			`padding-right: ${t * padding_right}px;` +
			`margin-left: ${t * margin_left}px;` +
			`margin-right: ${t * margin_right}px;` +
			`border-left-width: ${t * border_left_width}px;` +
			`border-right-width: ${t * border_right_width}px;`
	};
}