/**
 * Tab.js -- Keeps track of what people owe.
 */
define(function() {
    
    var total = 0;
    
    return {
        
        addToTab: function(cost) {
            total += cost;
        },
        
        getTotal: function() {
            return total;
        }
    };
    
});

