
/*
 * Configure how and where to get non-requirejs files
 */
requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "lib/jquery/jquery",
        'underscore': 'lib/underscore',
        'Backbone': 'lib/backbone',
        
        'text': 'lib/text',
        'templates': '../templates'
    },
    shim: {
        'jquery': {
            exports: 'window.jQuery'
        },
        'underscore': {
            exports: 'window._'
        },
        'Backbone': {
            exports: 'window.Backbone',
            deps: ['underscore', 'jquery']
        }
    }
});

requirejs.onError = console && (console.error || console.log);

/*
 * The main module defintion, which kicks everything off
 */
require([
    'bar/Menu2'
],
    function(Menu) {
        var menu = new Menu({
            el: $('#menu'),
            tab: $('#tab')
        });
        menu.render();
    }
);
