const gulp = require('gulp');

const del = require('del');
const paths = require('vinyl-paths');
const rev = require('gulp-rev');


module.exports = function hash() {
  return gulp.src([
      'build/fonts/*.woff2',
      'build/img/**/*.{svg,png,jpg,webp}',
      'build/css/*.css',
      'build/js/*.js',
      'build/manifest.json',
  ], {
      base: 'build',
  })
      .pipe(paths(del))
      .pipe(rev())
      .pipe(gulp.dest('build'))
      .pipe(rev.manifest('rev.json'))
      .pipe(gulp.dest('build'));
};



