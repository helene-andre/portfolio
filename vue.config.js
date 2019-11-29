const path = require('path')

module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      }
    }
  }
}