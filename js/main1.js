
/*
 * The main module defintion, which kicks everything off
 */
require([
    
    /*
     * Converted to "config.js", relative to main file
     */
    'config'
],
    function(config) {
        
        document.getElementById('console').innerHTML = "Color: " + config.color;
        
    }
);
