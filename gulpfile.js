const gulp = require('gulp');
const server = require('./gulp/server')
const htmlmin = require('./gulp/gulp-htmlmin')
const styles = require('./gulp/styles')
const del = require("./gulp/clean");
const script = require("./gulp/script");
const images = require("./gulp/images");
const webp = require("./gulp/webp");
const sprite = require("./gulp/sprite");
const copy = require('./gulp/copy');
const build_html = require('./gulp/build_html');
const build_style = require('./gulp/build_style');
const clean_old = require('./gulp/clean_old');
const hash = require('./gulp/hash');
const replace = require('./gulp/replace');



function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(htmlmin, styles, script, copy, images, webp,)

const ceche = gulp.series(hash, replace)

const build = gulp.parallel(build_html, build_style, script, copy, images, webp,)

const work = gulp.series(del,sprite, dev)

// const branch = gulp.series(ftp)

module.exports.start = gulp.series(setMode(), work, server )
module.exports.build = gulp.series(setMode(true), del, sprite, build, ceche, clean_old)

