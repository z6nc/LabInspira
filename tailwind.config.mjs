/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				primario :"#0aa402"
				
			},
			colors: {
				primario: "#0aa402"
			
		   },
		   fontFamily: {
			'principal': ['Luckiest Guy', 'cursive'],
		   },
		
	},
	plugins: [],
}
}
