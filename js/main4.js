
/*
 * Configure how and where to get non-requirejs files
 */
requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "lib/jquery/jquery",
        'underscore': 'lib/underscore',
        'Backbone': 'lib/backbone'
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
define([
    'bar/Menu'
],
    function(Menu) {
        var menu = new Menu({
            el: $('#menu'),
            tab: $('#tab')
        });
        menu.render();
    }
);
