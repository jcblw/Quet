/*
* Quet Library - Small Library for javascript
* ========================
* Built to Work on Html 5 Browsers
*
* Author : Jacob Lowe
*/

console.time('quet');

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
                result = (/^#[\w\-]+$/.test(selector)) ? [ document.getElementById(selector.substr(1)) ] : document.querySelectorAll(selector);
                
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
                if(result !== target){
                    for (var attr in result) {
                        target[attr] = result[attr];
                    }
                }
            }
            
            
            
            return target;
        }
        
    quet.merge(quet.prototype);
    
    return quet;
  
})(quet);


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

/* Attributes
 * =================
 * Way to addClass removeClass and edit attributes
*/

(function(quet){
    var plug = quet.prototype,
        ele, i, ii, attributes, value, result;
    
    quet.merge(plug, {
        
        attr : function(nodeName, nodeValue){
            
            ele = quet.ele;
            
            for(i = 0; i < ele.length; i += 1){
                
                if(typeof nodeValue === 'string'){
                    
                    ele[i].setAttribute(nodeName, nodeValue);
                    
                }else{
                    
                   return ele[i].getAttribute(nodeName, nodeValue); 
                    
                }
                
            }
            return this;
        },
        
        addClass : function(className){
            
            ele = quet.ele;
            
            quet(quet.selector).each(function(i){
                value = quet.ele[i].getAttribute('class'); 
                if(value !== '' && value !== null){
                    result = [];
                    value = value.split(' ');
                    for(ii = 0; ii < value.length; ii += 1){
                        if(value[ii] !== className && value[ii] !== '' && value[ii] !== null){
                            result.push(value[ii]);
                        }
                    }
                    quet.ele[i].setAttribute('class', result.join(' ') + ' ' + className);
                }
                quet.ele[i].className = className;
            });
            return this;
            
        },
        
        removeClass : function(className){
            
            quet(quet.selector).each(function(i){
                
                value = quet.ele[i].getAttribute('class');
                if(value !== '' || value === null){
                    
                    value = value.split(' ');
                    result = [];
                    
                    for(ii = 0; ii < value.length; ii += 1){
                        
                        if(value[ii] !== className && value[ii] !== ''){
                            result.push(value[ii]);
                        }
                        
                    }
                    quet.ele[i].setAttribute('class', result.join(' '));
                }
                
            });
            
            return this;
            
        }
    })
    
}(quet));

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

console.timeEnd('quet')
