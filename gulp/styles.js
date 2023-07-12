const gulp = require('gulp');
const plumber = require ('gulp-plumber' );
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');



module.exports = function styles() {
  return gulp.src('source/styles/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(csso())
  .pipe(sourcemaps.write())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest("build/css"))
}

