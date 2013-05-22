
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

