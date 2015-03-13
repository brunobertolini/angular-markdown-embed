'use strict';

module.exports = function (config) {
  require('./shared.karma.conf')(config);

  config.set({
    reporters: config.reporters.concat(['coverage']),

    preprocessors: {
      'src/module/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'reports/coverage/'
    }
  });
};
