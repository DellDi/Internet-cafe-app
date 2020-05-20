// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'http://118.31.167.239:8080',
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    },
  }
}