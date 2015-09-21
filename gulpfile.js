var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      port: 3500
    }));
});