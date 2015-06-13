var gulp = require('gulp');
var conf = require('webpack.config.js');
var webpack = require("gulp-webpack");

module.exports = function () {
    gulp.task('webpack',function() {
        gulp.src('main.coffee') //エントリーポイントはmain.coffeeです
            .pipe(webpack(conf)) //gulp-webpackを実行します。
            .pipe($.uglify()) //圧縮します
            .pipe(gulp.dest('module.js'))
            .pipe($.browser.reload({stream: true}));

    });

}();
