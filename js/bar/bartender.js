/**
 * Bartender.js -- purchase brews and get your tab
 */
define(
    ['bar/tab'],
    function(tab) {
        
        return {
            
            purchaseBrew: function(brew) {
                tab.addToTab(brew.price);
            },
            
            getTab: function() {
                return tab.getTotal();
            }
            
        }
        
    }
);
