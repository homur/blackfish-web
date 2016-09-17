var gulp = require('gulp'),
    webserver = require('gulp-webserver'),  
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    src = './process',
    app = './build';

gulp.task('js', function() {
  return gulp.src( src + '/js/main.js' )
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('sass', function() {
  return gulp.src('./process/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/main.js', ['js']);
  gulp.watch( src + '/sass/style.scss', ['sass']);
});

gulp.task('css', function(){
  return gulp.src([
    './node_modules/reset.css/reset.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/animate.css/animate.css'])
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat('/'))
  .pipe(gulp.dest(app + '/css/min.css'))
});

gulp.task('prodJs', function(){
  return gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/fullpage.js/jquery.fullPage.js',
    ])
    .pipe(gulp.dest(app + '/js/'))
});

gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});
