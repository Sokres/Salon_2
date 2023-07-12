const gulp = require('gulp')

const images = require('./images')
const webp = require("./webp");
const sprite = require('./sprite')
const styles = require('./styles')
const htmlmin = require('./gulp-htmlmin')
const script = require('./script')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('source/img/*.{gif,png,jpg,svg}', gulp.series(images, readyReload))
    gulp.watch('source/img/*.{webp}', gulp.series(webp, readyReload))
    gulp.watch('source/img/icon-*.svg', gulp.series(sprite, readyReload))
    gulp.watch('source/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('source/js/*.js', gulp.series(script, readyReload))
    gulp.watch('source/pages/**/*.html', gulp.series(htmlmin, readyReload))

    return cb()
}
