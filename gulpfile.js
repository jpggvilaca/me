var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var Imagemin = require('imagemin');

// Default

// Boots up the server
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: false,
      port: 3500
    }));
});


// Converts coffee to js
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


// Converts scss to css
gulp.task('sass', function () {
	gulp.src('source/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/assets/stylesheets'));
});
 

 // Watch for file changes
gulp.task('watch', function () {
	gulp.watch('source/javascript/**/*.js', ['coffee']);
 	gulp.watch('source/scss/**/*.scss', ['sass']);
});


// Minifies images
new Imagemin()
    .src('source/assets/images/*.{gif,jpg,png,svg}')
    .dest('public/assets/images')
    .use(Imagemin.jpegtran({progressive: true}))
    .run(function (err, files) {
        console.log(files[0]);
        // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
    });


// Dist

gulp.task('minify-css', function() {
  return gulp.src('public/assets/stylesheets/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('public/assets/javascript/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Main tasks (which runs everything)

gulp.task('default', ['sass', 'watch' , 'prefixer', 'coffee', 'webserver']);
gulp.task('dist', ['minify-css', 'compress']);