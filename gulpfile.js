const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass()).pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}