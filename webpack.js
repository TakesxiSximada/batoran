var gulp = require('gulp');
var conf = require('webpack.config.js');
var webpack = require("gulp-webpack");
module.exports = function () {
    gulp.task('webpack',function() {
        gulp.src('path/to/app.coffee')
            .pipe(webpack(conf))
            .pipe($.uglify())
            .pipe(gulp.dest('path/to/bundle.js'))
            .pipe($.browser.reload({stream: true}));

    });

}();
