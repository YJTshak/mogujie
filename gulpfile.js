


let gulp = require('gulp');
let sass = require('gulp-sass');



gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss')


    .pipe(sass({outputStyle:'expanded'}))

    .pipe(gulp.dest('./src/css/'))

});



gulp.task('autoSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass']);
});