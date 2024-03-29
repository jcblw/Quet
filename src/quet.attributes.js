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