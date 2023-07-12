const gulp = require('gulp');
const imagemin = require("gulp-imagemin");


module.exports = function images() {
  return gulp.src('source/img/**/*.{gif,png,jpg,svg}')
  .pipe(imagemin([imagemin.optipng({
    optimizationLevel: 3
  }),
  imagemin.mozjpeg({
    quality: 75,
    progressive: true
  }),
  // imagemin.svgo({
  //   plugins: [
  //     { removeViewBox: true },
  //     { cleanupIDs: false }
  //   ]
  // })
]))
  .pipe(gulp.dest('build/img'))
}
