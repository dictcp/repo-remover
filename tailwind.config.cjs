module.exports = {
	// add this section
	purge: ['./src/**/*.html', './src/**/*.svelte'],

	// or 'media' or 'class'
	darkMode: false,

	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			}
		}
	},

	variants: {
		extend: {}
	},

	plugins: [require('@tailwindcss/forms')],
	mode: 'jit'
};