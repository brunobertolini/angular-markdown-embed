'use strict';

var gulp = require('nw-gulp-tasks')({

    name: 'search',

    build: true,
    release: true,
    ci: true,

    scripts: {
        src: [
            './src/module/module.js',
            './src/module/**/*.js'
        ]
    },

    quality: {
        src: [
            './src/module/module.js',
            './src/module/**/*.js'
        ]
    }
});
