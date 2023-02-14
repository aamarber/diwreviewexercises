// Sass configuration
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task(
  'default', () =>{
   return gulp.src(['./styles/*.scss', './styles/*.sass'])
   .pipe(sass())
   .pipe(gulp.dest('dist'));
  }
);