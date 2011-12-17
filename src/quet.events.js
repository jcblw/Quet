/* Events
 * =================
*/

(function(quet){
    
    // Just pass Array to addEventListener
    quet.prototype.attach = function(event , callback){
     
        quet(quet.selector).each(function(i){
            
            quet.ele[i].addEventListener(event, callback, false);
            
        });
        
        return this;
        
    }
    
}(quet))