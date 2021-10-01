var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('src/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('build'))
  });

gulp.task('default', function () {
    gulp.start('sass');
});
