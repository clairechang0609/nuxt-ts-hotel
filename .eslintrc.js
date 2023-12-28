module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript'
	],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	rules: {
		quotes: [ 'error', 'single' ],
		'no-console': 'warn',
		'vue/html-indent': [ 'error', 'tab' ],
		indent: [ 'error', 'tab' ],
		'no-tabs': 'off',
		semi: [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'no-extend-native': 'off',
		eqeqeq: [ 'error', 'smart' ],
		'vue/multi-word-component-names': 'off',
		'vue/html-self-closing': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/attributes-order': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/first-attribute-linebreak': 'off',
		'arrow-parens': [ 'error', 'as-needed' ],
		'import/no-named-as-default': 'off',
		'import/namespace': [ 'error', { allowComputed: true } ]
	}
};
