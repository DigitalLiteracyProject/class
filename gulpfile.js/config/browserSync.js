var config = require('./');
var serverConfig = require('./server');

module.exports = {
    // server: {
    //   baseDir: config.publicDirectory
    // },
    proxy: "http://localhost:" + serverConfig.port,
    files: ['dist/**/*.html']
};
