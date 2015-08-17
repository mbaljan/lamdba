var gulp=require('gulp');
var livereload = require('gulp-livereload');
var source = ['./**/*.php','./**/*.css'];
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);
 
gulp.task('iconfont', function(){
  return gulp.src(['iconfont/*.svg'])
    .pipe(iconfont({
      fontName: 'icons', // required 
      appendUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g. 
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('fonts/'));
});

gulp.task('default',function(){
    gulp.watch(source,function(){
        gulp.src(source)
            .pipe(livereload({ start: true }))
        console.log('Test');
    }
)
});