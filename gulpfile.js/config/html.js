var config = require('./')

module.exports = {
    watch: config.sourceDirectory + '/**/*.html',
    src: [config.sourceDirectory + '/**/*.html', '!**/{layouts,shared,macros}/**'],
    dest: config.publicDirectory,
    nunjucks: [config.sourceDirectory + '/'],
    htmlmin: {
        collapseWhitespace: true
    }
}
