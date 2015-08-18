var gulp = require('gulp');
var express = require('express');
var config = require('../config/server');
var gutil = require('gulp-util');
var compress = require('compression');
var logger = require('morgan');
var open = require('open');
var http = require('http');
var socketIO = require('socket.io');

gulp.task('server', function() {
    var url = 'http://localhost:' + config.port;

    var app = express();

    // set up app
    app
        .use(compress())
        .use(logger(config.logLevel))
        .use('/', express.static(config.root, config.staticOptions));

    // set up socket.io
    var server = http.Server(app);
    var io = socketIO(server);
    var connections = 0;
    io.on('connection', function(socket) {
        gutil.log("Someone connected to this socket");
        connections++;
        socket.emit("news", "You're user #" + connections);
    });

    server.listen(config.port);

    gutil.log('production server started on ' + gutil.colors.green(url));
    // open(url);
});
