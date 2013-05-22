
define([
    'Backbone',
    'bar/bartender'
],
    function(Backbone, bartender) {
        var Menu = Backbone.View.extend({

            tagName: "div",
            className: "bar-menu",

            events: {
                "click .buy-brew": "purchase"
            },

            render: function() {
                this.el.innerHTML = 
                    '<h4>Bar Menu</h4>' +
                    '<button class="btn btn-primary buy-brew" data-name="Coors Light" data-price="2">Purchase Coors Light - $2</button>' +
                    '<button class="btn btn-primary buy-brew" data-name="IPA" data-price="3">Purchase IPA - $3</button>' +
                    '<button class="btn btn-primary buy-brew" data-name="Hefeweizen" data-price="4">Purchase Hefeweizen - $4</button>';
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
