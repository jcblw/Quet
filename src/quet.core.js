/*
* Quet Library - Small Library for javascript
* ========================
* Built to Work on Html 5 Browsers
*
* Author : Jacob Lowe
*/

var quet = (function(){
    var quet = function(selector, que){
        return new quet.prototype.init(selector, que);
    }, result, arg, target, i;
    
    quet.prototype = {
        constructor : quet,
        selector: null,
        ele: [],
        init : function(selector, que){
                
                //Let the browser do the work
                result = document.querySelectorAll(selector);
                
                quet.selector = selector;
                quet.ele = result;
                
                return this;
        
        }
    };
    
    quet.prototype.init.prototype = quet.prototype;
    
    quet.merge = quet.prototype.merge = function(){
            
            if(arguments.length ===  1) {
                
                target = quet;
                
            }else{
                
                target = arguments[0];
                
            }
            
            for(arg in arguments){
                result = arguments[arg]
                for (var attr in result) { target[attr] = result[attr]; }
            }
            
            
            
            return target;
        }
        
    quet.merge(quet.prototype);
    
    return quet;
  
})(quet);


