module.exports = {
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
	devServer: {
    proxy: 'http://portfolio.test'
  }
}