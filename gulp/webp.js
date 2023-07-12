const gulp = require('gulp');

const webp = require('gulp-webp');

module.exports = function webpmin() {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({
    quality: 90
  }))
  .pipe(gulp.dest("build/img/webp"));

}


