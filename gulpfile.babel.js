import gulp from 'gulp';
import sass from 'gulp-sass';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';

const plugins = loadPlugins();

import storyboardWebpackConfig from './storyboard/webpack.config';
import eventWebpackConfig from './event/webpack.config';
import contentWebpackConfig from './content/webpack.config';

gulp.task('event-js', (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('content-js', (cb) => {
  webpack(contentWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('storyboard-js', (cb) => {
  webpack(storyboardWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('storyboard-html', () => {
  return gulp.src('storyboard/src/index.html')
    .pipe(plugins.rename('storyboard.html'))
    .pipe(gulp.dest('./build'))
});

gulp.task('css', function() {
  return gulp .src('stylesheets/*.scss')
              .pipe(
                sass({
                  outputStyle: 'compressed'
                }).on('error', sass.logError)
              )
              .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('copy-manifest', () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy-manifest', 'storyboard-js', 'storyboard-html', 'event-js', 'content-js', 'css']);

gulp.task('watch', ['default'], () => {
  gulp.watch('storyboard/**/*', ['build']);
  gulp.watch('content/**/*', ['build']);
  gulp.watch('event/**/*', ['build']);
  gulp.watch('stylesheets/**/*.scss', ['build']);
});

gulp.task('default', ['build']);
