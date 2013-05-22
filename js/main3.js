
/*
 * Configure how and where to get non-requirejs files
 */
requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "lib/jquery/jquery"
    },
    shim: {
        'jquery': {
            exports: 'window.jQuery'
        }
    }
});


/*
 * The main module defintion, which kicks everything off
 */
require([
    'config',
    'bar/bartender',
    'jquery'
],
    function(config, bartender, $) {

        $('#console').html('Tab: $0');
        
        $('.buy-brew').click(function() {
            var me = $(this);
            bartender.purchaseBrew({
                name: me.attr('data-name'),
                price: parseInt(me.attr('data-price'))
            });
            $('#console').html('Tab: $' + bartender.getTab());
        });

    }
);
