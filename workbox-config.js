module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{yml,html,md,scss,css,png,jpg,ico,gemspec,webmanifest,xml}'
	],
	swDest: 'assets/js/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};