const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const  HtmlWebpackPlugin = require('html-webpack-plugin')
// const  CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
   entry: './src/main.js',
   output: {
     filename: 'bundle.js',
     path: path.join(__dirname, 'dist')
   },
   devServer: {
     contentBase: './public'
   },
   module: {
     rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
       {
         test: /.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10kb
          }
        }
      }
     ]
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'app',
       meta: {
         viewport: 'width=device-width'
       },
       template: 'index.html'
     }),
     new VueLoaderPlugin()
    //  new CopyWebpackPlugin(['public'])
   ]
}

