#!/usr/bin/node
const webpack_config = require('./webpack.config')
const webpack = require('webpack')



webpack(webpack_config, (err, stats) => {
  console.log(err)
  console.log(stats)
})