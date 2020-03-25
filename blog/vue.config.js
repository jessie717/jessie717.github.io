module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    port: '9090',
    open: true,
    hotOnly: true,
    https: false
  }
}