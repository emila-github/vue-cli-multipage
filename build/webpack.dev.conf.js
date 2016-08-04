var path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var glob = require('glob');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: './src/index.html',
    //   template: './src/index.html',
    //   // inject: true
    // })
  ]
})

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

//  glob.sync(globPath).forEach(function (entry) {
//    basename = path.basename(entry, path.extname(entry));
//    tmp = entry.split('/').splice(-3);
//    pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
//    entries[pathname] = entry;
//  });

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(2);
    pathname = tmp.splice(0, tmp.length-1).join('/'); // 正确输出js和html的路径
    entries[pathname] = entry;
    console.log('entry=', entry);
    console.log('basename=', basename);
    console.log('tmp=', tmp);
    console.log('pathname=', pathname);
  });


//  console.log(entries);
  return entries;
}

var pages = getEntry('./src/module/**/*.html');

var commonsChunkPluginConf = {
  name: 'vendors',
  chunks: Object.keys(pages),
  // minChunks是指一个文件至少被require几次才会被放到CommonChunk里，如果minChunks等于2，说明一个文件至少被require两次才能放在CommonChunk里
  minChunks: 2 // 提取所有chunks共同依赖的模块
};
module.exports.plugins.push(new CommonsChunkPlugin(commonsChunkPluginConf));

for (var pathname in pages) {
//  console.log('pages=', Object.keys(pages), pages)
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    chunks: ['vendors', pathname],
    template: pages[pathname], // 模板路径
    inject: true              // js插入位置
  };
  console.log(pathname, conf);
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
