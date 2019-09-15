const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

function scss() {
  return src('./scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('./dist'));
}

exports.scss = scss;
exports.default = series(scss);
