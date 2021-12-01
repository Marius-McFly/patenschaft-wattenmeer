module.exports = {
	mode: 'jit',
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
			},

			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				blue: {
					default: '#00aed6',
					100: '#eef9ff'
				},

				beige: {
					default: '#efe7d0'
				},

				black: {
					default: '#2e3b3d'
				},

				green: {
					default: '#00d673'
				}
			},

			screens: {
				mobile: '318px',
				phablet: '738px',
				tablet: '942px',
				desktop: '1280px',
				widescreen: '1600px',
				'widescreen-xl': '1773px'
			},

			fontSize: {
				xs: [
					'18px',
					{
						lineHeight: '27px'
					}
				],
				sm: [
					'20px',
					{
						lineHeight: '30px'
					}
				],
				tiny: [
					'24px',
					{
						lineHeight: '36px'
					}
				],
				base: [
					'32px',
					{
						lineHeight: '41px'
					}
				],
				lg: [
					'40px',
					{
						lineHeight: '50px'
					}
				],
				xl: [
					'48px',
					{
						lineHeight: '57.6px'
					}
				],
				'2xl': [
					'64px',
					{
						lineHeight: '76.8px'
					}
				],
				'3xl': [
					'80px',
					{
						lineHeight: '112px'
					}
				]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
