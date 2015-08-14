var gulp=require('gulp');
var livereload = require('gulp-livereload');
var source = ['./**/*.php','./**/*.css'];


gulp.task('default',function(){
    gulp.watch(source,function(){
        gulp.src(source)
            .pipe(livereload({ start: true }))
        console.log('Test');
    }
)
});