var gulp=require('gulp');
var livereload = require('gulp-livereload');
var source = ['./**/*.php','./**/*.css'];
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);
var consolidate = require('gulp-consolidate');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'Icons';

gulp.task('iconfont', function(){
  gulp.src(['./iconfont/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: './templates/iconfont.css',
      targetPath: '../css/iconfont.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['ttf', 'eot', 'woff', 'svg'],
      normalize: true
     }))
    .pipe(gulp.dest('./fonts/'));
});

gulp.task('default',function(){
    gulp.watch(source,function(){
        gulp.src(source)
            .pipe(livereload({ start: true }))
        console.log('Test');
    }
)
});