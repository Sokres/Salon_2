const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const svgstore = require("gulp-svgstore");
const rename = require('gulp-rename');

module.exports = function sprite() {
  return gulp.src("source/img/ico/*.svg")
  .pipe(imagemin([
  imagemin.svgo({
    plugins: [
      { removeViewBox: true },
      { cleanupIDs: false }
    ]
  })
]))
  .pipe(svgstore({
    inlineSvg: true
  }))

  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"))
}
