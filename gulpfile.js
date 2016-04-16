var gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    gutil       = require('gulp-util'),
    chalk       = require('chalk'),
    argv        = require('yargs').argv,
    browserSync = require('browser-sync'),
    addsrc      = require('gulp-add-src'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    plumber     = require('gulp-plumber'),
    notifier    = require('node-notifier'),
    cssnano     = require('gulp-cssnano'),
    eslint      = require('gulp-eslint'),
    del         = require('del'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    csso        = require('gulp-csso'),
    runSequence = require('run-sequence'),
    uglify      = require('gulp-uglify'),
    cmq         = require('gulp-merge-media-queries'),
    webpack     = require('webpack-stream'),
    WebpackDevServer = require('webpack-dev-server'),
    reload      = browserSync.reload;


// watch files for changes and reload
gulp.task('serve', function() {
  'use strict';
  browserSync.init({
      server: {
          baseDir: './dist'
      },
      // Change the default port
      //(note: if you are using the api then this runs on port 5000 and requires running server.js)
      port: 3000,
      // All open instances of the site will reload if the server is restarted
      reloadOnRestart: true,
      // // Don't show any notifications in the browser.
      notify: false,
      // // Sync actions between devices
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: false
      }
  });
  // Perform the site init
  runSequence('build');

  // Compile Standard JS
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['scripts'], reload);

  // Compile Stylus
  gulp.watch('src/styles/**/*.styl', ['styles']);

  // Compile Standard JS
  gulp.watch('src/images', ['images'], reload);

  // Show success message
  console.log(chalk.green('✔ Server started!'))
});

var errors = 0,
    supportedBrowsers = [
    'last 2 versions',
    'safari >= 8',
    'ie >= 10',
    'ff >= 20',
    'ios 6',
    'android 4'
],
onError = function (err) {
  'use strict';
  console.log(chalk.red('✘ Build failed!'))
  notifier.notify({ title: 'Build', message: 'Failed', icon: 'http://cdn.volcaniccreations.com/topaz/failed.png' });
  console.log(err);
  errors = errors+1
  this.emit('end');
};

// Combine styles
gulp.task('styles', function(callback) {
  'use strict';
  return gulp.src('src/styles/start.styl')
    .pipe(gulpif(!argv.prod, addsrc('src/styles/dev.styl')))
    .pipe(plumber(
      { errorHandler: onError }
    ))
    .pipe(stylus({
      'include css': true,
      use: [jeet(), rupture()]
    }))
    .pipe(concat('core.min.css'))
    .pipe(cmq())
    .pipe(csso())
    .pipe(
      cssnano({
        autoprefixer: {browsers: supportedBrowsers, add: true}
      })
    )
    .pipe(gulp.dest('dist/static/css'))
    .pipe(reload({stream:true}))
     callback();
});

// Process and move supplementary CSS
gulp.task('extrastyles', function(callback) {
  'use strict';
  gulp.src('src/styles/print.styl')
    .pipe(plumber(
      { errorHandler: onError }
    ))
    .pipe(stylus())
    .pipe(concat('print.min.css'))
    .pipe(gulp.dest('dist/static/css'))
  callback();
});

// Combine JS
gulp.task('scripts', function() {
  'use strict';
  return gulp.src('src/scripts/app.js')
    .pipe(plumber(
      { errorHandler: onError }
    ))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(eslint())
    .pipe(concat('core.min.js'))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest('dist/static/scripts'))
    .pipe(reload({stream:true}))
});

// Start a webpack-dev-server
gulp.task('webpack-dev-server', function(callback) {
    'use strict';
    var compiler = webpack({
        // configuration
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, 'localhost', function(err) {
        if(err) { throw new gutil.PluginError('webpack-dev-server', err); }
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

        // keep the server alive or continue?
        // callback();
    });
});

// Move html file to site root
gulp.task('processHTML', function() {
  'use strict';
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

var prodBuild = ['clean', 'styles','extrastyles','scripts','images','processHTML', 'notify'],
    devBuild = ['styles','extrastyles','libs','processHTML','scripts', 'notify'],
    buildTasks = argv.prod ? prodBuild : devBuild;

// Perform Basic Build (note, don't call directly, use build:dev or build)
gulp.task('build', function (callback) {
  'use strict';
  runSequence.apply(
    null,
    buildTasks,
    callback
  );
});

gulp.task('notify', function() {
  'use strict'
  console.log(chalk.green('✔ Build complete!'))
  notifier.notify({ title: 'Build', message: 'Completed', icon: 'src/images/icons/apple-touch-icon.png' });
})

// Compress and minify images to reduce their file size
gulp.task('images', function() {
  'use strict';
  var imgSrc = 'src/images/**/*',
      imgDst = 'dist/static/images';

  return gulp.src(imgSrc)
    .pipe(plumber())
    .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{removeViewBox: false}],
         use: [pngquant()]
    }))
    .pipe(gulp.dest(imgDst))
});
// Deletes contents of dist folder
gulp.task('clean', function(cb) {
    'use strict';
    return del(['dist/**/*.*'], cb)
});
