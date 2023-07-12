const gulp = require('gulp')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const buffer = require('vinyl-buffer');

module.exports = function script() {
  return gulp.src('source/js/*.js')
    .pipe(plumber())
    .pipe(buffer())
    .pipe(eslint.format())
    .pipe(gulp.dest('build/js'))
}
