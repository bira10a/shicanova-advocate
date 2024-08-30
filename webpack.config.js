'use strict';

const config = {
  mode: 'production',
  entry: {
    main: './app/js/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    // path: __dirname + '/js'
  },
  // watch: true,

  // devtool: "source-map",

  module: {}
};

module.export = config;