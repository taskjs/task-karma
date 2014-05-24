var Execution = require('execution');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        browsers: {
            label: 'Browsers',
            type: 'array',
            defaults: [],
            placeholder: 'A list of browsers to launch and capture'
        },
        frameworks: {
            label: 'Frameworks',
            type: 'array',
            default: [],
            placeholder: 'List of frameworks you want to use. Typically, you will set this to ["jasmine"], ["mocha"] or ["qunit"]...'
        },
        basePath: {
            label: 'Base Path',
            type: 'string',
            default: '',
            placeholder: 'The root path location that will be used to resolve all relative paths defined in files and exclude'
        },
        files: {
            label: 'Files',
            type: 'array',
            default: [],
            placeholder: 'List of files/patterns to load in the browser'
        },
        singleRun: {
            label: 'Run Single',
            type: 'boolean',
            default: false
        },
        port: {
            label: 'Port',
            type: 'number',
            default: 9876,
            placeholder: 'The port where the webserver will be listening'
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var server = require('karma').server;
        server.start(options, function(exitCode){
            logger.log('Karma has exited with ' + exitCode);
            resolve(inputs);
        });
    }
})
