module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			'content/**/*.md'
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lexend', 'Arial', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
