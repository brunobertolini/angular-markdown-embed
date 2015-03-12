'use strict';

module.exports = function (config) {
  require('./shared.karma.conf')(config);

  config.set({
    reporters: config.reporters.concat(['progress', 'coverage']),

    coverageReporter: {
      type : 'cobertura',
      dir : 'reports/coverage/'
    }
  });
};
