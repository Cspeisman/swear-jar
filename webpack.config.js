import webpack from 'webpack';

export default {
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js',
  ],

  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /(node_modules|bower_components)/, loaders: ['react-hot', 'babel-loader']},
    ],
  },
};
