const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

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
    .pipe(rename('cascadeflow.css'))
    .pipe(dest('./dist'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('cascadeflow.min.css'))
    .pipe(dest('./dist'));
}

exports.scss = scss;

exports.watchScss = function() {
  watch('./scss/main.scss', scss);
};

exports.default = series(scss);
