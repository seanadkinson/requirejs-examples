
/*
 * The main module defintion, which kicks everything off
 */
define([
    'config',
    
    /*
     * Converted to "bar/bartender.js", relative to main file
     */
    'bar/bartender'
],
    function(config, bartender) {

        bartender.purchaseBrew({
            name: 'IPA',
            price: 3
        });

        bartender.purchaseBrew({
            name: 'Hefeweizen',
            price: 4
        });

        document.getElementById('console').innerHTML = "Total Tab: $" + bartender.getTab();
        
    }
);
