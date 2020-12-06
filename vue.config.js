
module.exports = {
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'apartments'
			return args
		})

		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')

	}

}