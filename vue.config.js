const path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/iyanan-fund-backend': {
        target: 'http://uat.iyanan.systoon.com/iyanan-fund-backend', // 测试
        // target: 'https://iyanan.yanan.gov.cn/iyanan-fund-backend', // 生产
        // target: '"http://172.31.255.171:8081/"', // 本地
        pathRewrite: { '^/iyanan-fund-backend': '/' } // 重写 /iyanan-fund-backend 为 /
      }
    }

  },
  //	输出的目录文件夹
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 相关配置请参考：https://cli.vuejs.org/config/
