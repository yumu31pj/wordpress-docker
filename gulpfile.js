'use strict';

const { src, dest, watch, parallel, series } = require("gulp")
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// Your Theme
const theme = "wplab2024"
const themeDestination = "./wordpress/wp-content/themes/" + theme;

// Compile scss sources
const compileSass = () => {
  return src("./_gulp/src/scss/**/*.scss", { sourcemaps: true })
    // .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(`${themeDestination}/css`, { sourcemaps: "." }))
}

// js compress
const minifyJs = () => {
  return src("./_gulp/src/js/*.js", { sourcemaps: true })
    .pipe(concat('app.js'))
    .pipe(uglify({
      output: {
        comments: false
      }
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(`${themeDestination}/js`, { sourcemaps: "." }))
}

// Watch sources change
const watchFiles = () => {
  watch("./_gulp/src/scss/**/*.scss", { ignoreInitial: false }, compileSass)
  watch("./_gulp/src/js/*.js", { ignoreInitial: false }, minifyJs)
}

exports.default = watchFiles