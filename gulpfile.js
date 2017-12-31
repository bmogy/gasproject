var gulp = require('gulp'),
watch = require('gulp-watch'),
 sass = require('gulp-sass'),
 watchSass=require("gulp-watch-sass");
 
 
gulp.task('sass', function () {
  return gulp.src('./app/assets/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/styles/src'));
});


gulp.task("sass:watch", () => watchSass([
  "./app/assets/**/*.{scss,css}",
  "!./app/assets/**/*"
])
  .pipe(sass())
  .pipe(gulp.dest("./app/assets/styles/src")));


 
gulp.task('sass:watch', function () {
  gulp.watch('./app/assets/**/*.{scss,css}', ['sass']);

});
gulp.task("watch", function(){
	watch('./app/assets/**/*.{scss,css}', ['sass'],function(){
		gulp.start("sass:watch");
	})

})

