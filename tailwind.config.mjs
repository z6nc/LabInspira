/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				primario :"#0aa402",
				theme: {
					'black-t-50': 'rgba(0, 0, 0, 0.459)',
				},
			},
			colors: {
				primario: "#0aa402",
				secundario: "#6AFF62",
			
		   },
		   fontFamily: {
			'principal': ['Luckiest Guy', 'cursive'],
			'secundaria': ['Comic Neue', 'cursive'],
		   },
		   borderWidth: {
			'1': '1px',
			'3': '3px',
		   },
		    boxShadow: {
			'boxBottom': '4px 4px 1px 1px #6aff62',
			}
		
	},
	plugins: [],
}
}
