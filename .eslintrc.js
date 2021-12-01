module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'no-tabs': 'off',
		indent: [2, 'tab'],
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }]
	}
}
