
const { src, dest, parallel, watch, task } = require('gulp');

// 合并require
const browserify = require('browserify');

// 编译es6
const babel = require('gulp-babel');

var source = require('vinyl-source-stream');

var uglify = require('gulp-uglify');

const buffer = require('vinyl-buffer');


function jsTask() {

  src(['./script.js', './build.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('./.es5temp'))

  return src(['./src/**/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('./.es5temp/src'))
    .on('end', function () {
      var b = browserify({
        // entries: './es5/Utils.js',
        entries: './.es5temp/script.js',
        // debug: true
      });
      return b.bundle()
        .pipe(source('Utils.js'))
        .pipe(dest('./dist'))
    })
    .on('end', function () {
      var b = browserify({
        entries: './.es5temp/script.js',
      });
      return b.bundle()
        .pipe(source('Utils.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest('./dist'))
    })
}


function defaultTask(cb) {
  jsTask()
  cb();
}
exports.default = parallel(defaultTask);

watch('./src/**/*.js', function () {
  jsTask();
})