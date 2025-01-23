/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial': 'radial-gradient(100% 300% at 0% -50%, #db0414 10%, #c60842 50%, #7c1773 90%)',
				'box-linear': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 25%)',

			  },
		},
	},
	plugins: [],
}
