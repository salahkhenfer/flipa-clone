/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					'0%': {
						width: '0%',
						visibility: 'hidden'
					},
					'100%': {
						width: '100%',
						display: 'none'
					}
				},
				blink: {
					'50%': {
						borderColor: 'transparent'
					},
					'100%': {
						borderColor: 'white',
						display: 'none'
					}
				}
			},
			animation: {
				typing: 'typing 2s steps(20)  , blink .7s '
			}
		}
	},
	plugins: []
};
