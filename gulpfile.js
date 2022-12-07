const livereload = require("gulp-livereload");
const gulp = require("gulp");
// to move css
const cleanCSS = require('gulp-clean-css');
// to make all css in one file
const concat = require('gulp-concat');
// for the pug
const { src, dest } = require('gulp');
// Minify JavaScript with terser.
const minify = require('gulp-minify');






function minifycss() {
  return gulp
  .src(['./src/public/stylesheets/css/style.css'])
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(livereload());
}




function minifyJs() {
  return gulp
  .src(['src/public/scripts/js/index.js', 'src/public/scripts/js/portfolio.js', 'src/public/scripts/js/about.js', 'src/public/scripts/js/prices.js', 'src/public/scripts/js/contact.js', 'src/public/scripts/js/all-files.js'])
  .pipe(minify())
  .pipe(gulp.dest('dist/js'))
  .pipe(livereload());
}






exports.default = function () {
  // require("./server.js");

  gulp.watch( ["src/public/stylesheets/css/style.css"]  ,  minifycss );
  gulp.watch( ["src/public/scripts/js/index.js", "src/public/scripts/js/portfolio.js", "src/public/scripts/js/about.js", "src/public/scripts/js/prices.js", "src/public/scripts/js/contact.js", "src/public/scripts/js/all-files.js"]  ,  minifyJs );
};


// 
// npm install gulp-ejs-minify --save-dev 



