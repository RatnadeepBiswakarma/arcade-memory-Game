const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('default', () => {
	gulp.watch('sass/**/*.scss', ['styles'])
})
gulp.task('styles', ()=> {
	gulp.src('sass/**/*.scss')
	.pipe(sass())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 4 versions']
	}))
	
	.pipe(gulp.dest('./css'))
});