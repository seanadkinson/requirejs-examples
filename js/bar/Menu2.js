
define([
    'Backbone',
    'bar/bartender',
    'text!templates/menu.html'
],
    function(Backbone, bartender, menuTemplate) {
        var Menu = Backbone.View.extend({

            tagName: "div",
            className: "bar-menu",

            events: {
                "click .buy-brew": "purchase"
            },

            render: function() {
                this.el.innerHTML = menuTemplate;
            },

            purchase: function(event) {
                var brew = $(event.target);
                bartender.purchaseBrew({
                    name: brew.attr('data-name'),
                    price: parseInt(brew.attr('data-price'))
                });
                this.options.tab.html(bartender.getTab());
            }

        });
        
        return Menu;
    }
);
