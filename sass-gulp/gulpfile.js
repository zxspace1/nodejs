var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') //pobiera stąd
        .pipe(sass()) //kompiluje
        .pipe(gulp.dest('app/css')); // wypluwa tu
});


gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']); // śledzenie zmian
});
