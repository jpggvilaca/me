var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: false,
      port: 3500
    }));
});

gulp.task('coffee', function() {
	gulp.src('source/javascript/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('public/assets/javascript'))
});

gulp.task('prefixer', function() {
  return gulp.src('source/scss/styles.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/scss/'));
});

gulp.task('sass', function () {
	gulp.src('source/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/assets/stylesheets'));
});
 
gulp.task('watch', function () {
	gulp.watch('source/javascript/**/*.js', ['coffee']);
 	gulp.watch('source/scss/**/*.scss', ['sass']);
});

// Main tasks (which runs everything)

gulp.task('default', ['sass', 'watch' , 'prefixer', 'coffee', 'webserver']);
//gulp.task('dist', ['scripts', 'styles', 'riot-gulp', 'minify-html']);