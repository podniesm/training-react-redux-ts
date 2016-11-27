const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("_wwwroot"));
});

gulp.task('build-app', function() {
    return gulp.src('src/App.tsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('_wwwroot/'));
});

gulp.task('build', ['copy-html', 'build-app']);
