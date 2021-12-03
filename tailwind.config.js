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

		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			white: '#fff',

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

		extend: {
			fontFamily: {
				sans: ['Lexend', 'Arial', 'sans-serif']
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
					'14px',
					{
						lineHeight: '21px'
					}
				],
				sm: [
					'16px',
					{
						lineHeight: '24px'
					}
				],
				tiny: [
					'18px',
					{
						lineHeight: '27px'
					}
				],
				base: [
					'24px',
					{
						lineHeight: '36px'
					}
				],
				lg: [
					'32px',
					{
						lineHeight: '48px'
					}
				],
				xl: [
					'40px',
					{
						lineHeight: '48px'
					}
				],
				'2xl': [
					'48px',
					{
						lineHeight: '57.6px'
					}
				],
				'3xl': [
					'72px',
					{
						lineHeight: '86.4px'
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
