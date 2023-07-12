const gulp = require('gulp');
var gutil = require( 'gulp-util' );
var ftps = require( 'vinyl-ftp' );


module.exports = function ftp() {
  var globs = [
		'build/**'
	];
    var conn = ftps.create( {
        host:     '31.31.196.157',
        user:     '',
        password: '',
        parallel: 10,
        log:      gutil.log
    } )

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { buffer: false } )
        .pipe( conn.dest( '/www/anglofan.ru/' ))
}
