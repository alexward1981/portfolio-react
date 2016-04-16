module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'dist/static/scripts/core.min.js',
      'tests/**/*.js'
    ]
  });
};
