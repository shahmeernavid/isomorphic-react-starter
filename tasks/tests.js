var babel = require('gulp-babel');
var gulp = require('gulp');
var setup = require('../tools/gulp-custom-setup');
var sourcemaps = require('gulp-sourcemaps');

var compile = function(){
    return gulp.src('./src/tests/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            optional: ['es7.asyncFunctions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/tests/'));
};

setup(compile, 'tests');