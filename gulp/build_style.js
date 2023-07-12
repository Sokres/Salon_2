const gulp = require('gulp');
const plumber = require ('gulp-plumber' );
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require("gulp-rename");
const csso = require('gulp-csso');
const gcmq = require('gulp-group-css-media-queries');



module.exports = function styles() {
  return gulp.src('source/styles/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(csso())
  .pipe(gcmq())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest("build/css"))
}

