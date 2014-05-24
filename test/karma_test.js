'use strict';

var assert = require('assert');
var Karma = require('../lib/karma');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Karma).run(
    [], // inputs
    {
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        basePath: __dirname,
        files: [
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        singleRun: true
    }, // options
    console // logger
).then(function(inputs){

}).catch(errorHandler)
