const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', async () => {
    return gulp.src(['./**/*.scss', '!./node_modules/**'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
});

gulp.task('watch', function() {
    return gulp.watch('./**/*.scss',  gulp.series(['styles']));
});
