const gulp = require('gulp');

const htmlmin = require ("gulp-html-minimizer");
// const htmlValidator = require ('gulp-w3c-html-validator' );
const posthtml = require ('gulp-posthtml');
const plumber = require ('gulp-plumber' );
const include = require("posthtml-include");

module.exports = function minifyHTML() {
  return gulp.src("source/pages/**/*.html")
    .pipe(plumber())
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
        collapseWhitespace: true
      }))
    // .pipe(htmlValidator())
    .pipe(gulp.dest("build/"));
}
