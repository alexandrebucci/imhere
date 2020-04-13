const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
require('dotenv').config();

const ENV = process.env.APP_ENV;
const isDev = ENV === 'dev'; // boolean
const isProd = ENV === 'prod'; // boolean

function setDevTool() {  // function to set dev-tool depending on environment
  if (isDev) {
    return 'inline-source-map';
  } else if (isProd) {
    return 'source-map';
  } else {
    return 'eval-source-map';
  }
}

const config = {
  devtool: setDevTool(),  //Set the devtool
  entry: __dirname + "/app/src/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        })
      },
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/app/public/index.html",
          inject: 'body'
      }),
      new ExtractTextPlugin("styles.css"), // extract css to a separate file called styles.css
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './app/public',  //source of static assets
      port: 7700, // port to run dev-server
  }
}

// Minify and copy assets in production
if(isProd) {  // plugins to use in a production environment
  config.plugins.push(
      //new UglifyJSPlugin(),  // minify the chunk
      new CopyWebpackPlugin([{  // copy assets to public folder
        from: __dirname + '/app/public'
      }])
  );
};

module.exports = config;
