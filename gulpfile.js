const gulp = require('gulp');
const concat = require('gulp-concat')

gulp.task('js', function() {
    gulp.src(['./js/app.js', './js/**/*.js'])
    .pipe(concat(bundle.js))
    .pipe(gulp.dest('/dist'))
})

gulp.task('css', function() {
    gulp.src([
        './styles/base/*.css',
        './styles/fonts/*.css',
        './styles/**/*.css'
    ]).pipe
})