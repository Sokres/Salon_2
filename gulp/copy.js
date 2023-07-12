const gulp = require('gulp');

module.exports = function copy(){
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/*.{ico,png,svg,json,txt,.htaccess,xml}",
    "source/.htaccess"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
}
