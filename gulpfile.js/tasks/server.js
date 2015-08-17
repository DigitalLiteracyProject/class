var gulp     = require('gulp');
var express  = require('express');
var config   = require('../config/server');
var gutil    = require('gulp-util');
var compress = require('compression');
var logger   = require('morgan');
var open     = require('open');
var http     = require('http');
var io       = require('socket.io');

gulp.task('server', function() {
  var url = 'http://localhost:' + config.port;

  var app = express();

  // set up app
  app
    .use(compress())
    .use(logger(config.logLevel))
    .use('/', express.static(config.root, config.staticOptions))
    .listen(config.port)

  // set up socket.io
  io(http.Server(app))
    .on('connection', function(socket){
      console.log('a user connected');
    });
    // TODO(neel): test this here


  gutil.log('production server started on ' + gutil.colors.green(url));
  open(url);
});
