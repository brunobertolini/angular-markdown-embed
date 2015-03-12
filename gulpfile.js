'use strict';

var gulp = require('nw-gulp-tasks')({

    name: 'markdown',

    build: true,
    release: true,
    ci: true,

    scripts: {
        test: {
            libs: [
                './lib/marked/marked.min.js',
                './lib/highlightjs/highlight.pack.js'
            ]
        },

        src: [
            './src/module/module.js',
            './src/module/**/*.js'
        ],

        bundle: [
            './lib/marked/marked.min.js',
            './lib/highlightjs/highlight.pack.js'
        ]
    },

    quality: {
        src: [
            './src/module/module.js',
            './src/module/**/*.js'
        ]
    }
});
