var gulp = require('gulp');
var styl = require('gulp-stylus');
var jade = require('gulp-jade');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

var input = {
  'jade': './source/index.jade',
  'styl': './source/styl/main.styl',
  'js': './source/js/main.js',
  'fonts': './source/fonts/*',
  'img': './source/img/*'
}

var output = {
  'html': './public/',
  'css': './public/css/',
  'js': './public/js/',
  'fonts': './public/fonts.styl/',
  'img': './public/img'
}

gulp.task('default', ['watch']);


gulp.task('jade', function() {
  //noinspection JSUnresolvedFunction
  gulp.src(input.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(output.html))
    .pipe(livereload());
});

gulp.task('styl', function() {
  gulp.src(input.styl)
    .pipe(styl())
    .pipe(gulp.dest(output.css))
    .pipe(livereload());
});

gulp.task('js',function() {
  gulp.src(input.js)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(output.js))
    .pipe(livereload());
});

gulp.task('fonts', function() {
  gulp.src(input.fonts)
    .pipe(gulp.dest(output.fonts))
    .pipe(livereload());
});

gulp.task('img', function() {
  gulp.src(input.img)
    .pipe(gulp.dest(output.img))
    .pipe(livereload());
});

gulp.task('watch', ['jade', 'styl', 'js', 'fonts', 'img'], function() {
  livereload.listen();
  gulp.watch('./source/*.jade', ['jade']);
  gulp.watch('./source/styl/*.styl', ['styl']);
  gulp.watch(input.js, ['js']);
  gulp.watch(input.fonts, ['fonts']);
  gulp.watch(input.img, ['img']);
});
