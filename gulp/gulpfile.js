const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('transpile', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('built/'));
});

gulp.task('main', function() {
    gulp.watch('./sass/*.scss', gulp.series('transpile'));
  });
