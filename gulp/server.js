const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');
const monitorFiles = (callback) => {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/**/*.*', () => gulp.series('appIMG')())
    return callback();
}
const server = (callback) => {
    return gulp.src('build')
        .pipe(webserver({ 
            port: 8080, 
            open: true, 
            livereload: true 
        }))
}
module.exports = {
    monitorFiles,
    server
}