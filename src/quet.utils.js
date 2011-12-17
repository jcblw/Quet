/*Utilities
 *============
 *Some Basic Utilities
*/

(function(quet){
    
    var ele;
    
    quet.prototype.each = function(callback){
        
        var ele = quet.ele;
        
        for(var i = 0; i < ele.length; i += 1){
            
            callback(i);
            
        }
        
        return this;
        
        
    }
    
    
}(quet));