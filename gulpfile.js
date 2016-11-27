const gulp = require('gulp');

const paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("_wwwroot"));
});

gulp.task('build', ['copy-html']);
