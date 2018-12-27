"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    fileinclude = require('gulp-file-include'),
    shorthand = require('gulp-shorthand'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');

var scss_path = ['scss/*.scss', 'scss/*/*.scss'],
    inc_file = 'template/*.html',
    template_file = 'template/include/*.html';

var isProduction = argv.env === 'production';

browserSync.init({
    server: "./dist"
});

function reportError(err) {
    notify.onError({
        title: "Gulp error in " + err.plugin,
        message: err.toString()
    })(err);
}

function scssTask() {
    gulp.src(scss_path)
        .pipe(plumber({
            errorHandler: reportError
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(gulpif(isProduction, minifyCSS()))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
}

function jsTask() {
    return gulp.src(['./js/lib/jquery-3.3.1.min.js', './js/lib/*.js', './js/app.js'])
        .pipe(plumber({
            errorHandler: reportError
        }))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function templateTask() {
    gulp.src([inc_file])
        .pipe(plumber({
            errorHandler: reportError
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function images() {
    gulp.src("./images/**.*")
        .pipe(gulp.dest('./dist/images'));
}

function watchTask() {
    gulp.watch([inc_file, template_file], ['template']);
    gulp.watch([scss_path], ['scss']);
    gulp.watch(['js/*.js', 'js/libs/*.js'], ['js']);
    gulp.watch(['images/**.*'], ['images']);
}

(function start(){
    scssTask();
    jsTask();
    templateTask();
    images();
})();

gulp.task('scss', scssTask);
gulp.task('js', jsTask);
gulp.task('template', templateTask);
gulp.task('images', images);
gulp.task('watch', watchTask);
gulp.task('build', ['template', 'scss', 'js']);
