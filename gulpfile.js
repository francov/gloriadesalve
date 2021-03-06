var gulp = require('gulp')
var less = require('gulp-less')
var browserSync = require('browser-sync').create()
var header = require('gulp-header')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var filter = require('gulp-filter')
var pkg = require('./package.json')

// Set the banner content
var banner = [
  '/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2016-' + new Date().getFullYear(),
  ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %>\n',
  ' */\n',
  '',
].join('')

// Compile LESS files from /less into /css
gulp.task('less', function() {
  var f = filter(['*', '!mixins.less', '!variables.less'])
  return (
    gulp
      .src('less/*.less')
      // .pipe(f)
      .pipe(less())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('css'))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      )
  )
})

// Minify compiled CSS
gulp.task(
  'minify-css',
  gulp.series('less', function() {
    return gulp
      .src('css/main.css')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('css'))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      )
  })
)

// Minify JS
gulp.task('minify-js', function() {
  return gulp
    .src(['js/main.js', 'js/email.js', 'js/switch-language.js', 'js/analytics.js'])
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
})

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function(cb) {
  gulp
    .src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
    .pipe(gulp.dest('vendor/bootstrap'))

  gulp
    .src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('vendor/jquery'))

  gulp
    .src([
      'node_modules/font-awesome/**',
      '!node_modules/font-awesome/**/*.map',
      '!node_modules/font-awesome/.npmignore',
      '!node_modules/font-awesome/*.txt',
      '!node_modules/font-awesome/*.md',
      '!node_modules/font-awesome/*.json',
    ])
    .pipe(gulp.dest('vendor/font-awesome'))
  setTimeout(() => {
    cb()
  }, 1000)
})

// Clone index.html for SEO
gulp.task('clone-index', function(cb) {
  gulp
    .src('index.html')
    .pipe(rename('./contacts.html'))
    .pipe(gulp.dest('.'))

  gulp
    .src('index.html')
    .pipe(rename('./about.html'))
    .pipe(gulp.dest('.'))

  gulp
    .src('index.html')
    .pipe(rename('./my-works.html'))
    .pipe(gulp.dest('.'))
  setTimeout(() => {
    cb()
  }, 1000)
})

// Run everything
gulp.task('default', gulp.series('less', 'minify-css', 'minify-js', 'copy', 'clone-index'))

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '',
    },
  })
})

// Dev task with browserSync
gulp.task(
  'dev',
  gulp.series('browserSync', 'less', 'minify-css', 'minify-js', 'clone-index', function() {
    gulp.watch('less/*.less', ['less'])
    gulp.watch('css/*.css', ['minify-css'])
    gulp.watch('js/*.js', ['minify-js'])
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', ['clone-index', browserSync.reload])
    gulp.watch('js/**/*.js', browserSync.reload)
  })
)
