const gulp = require('gulp');

const fs = require('fs');
const rewrite = require('gulp-rev-rewrite');


module.exports = function replace()  {
  const manifest = fs.readFileSync('build/rev.json');

  return gulp.src([
      'build/**/*.{html,css}',
      'build/manifest-*.json',
  ])
      .pipe(rewrite({
          manifest,
      }))
      .pipe(gulp.dest('build'));
};



