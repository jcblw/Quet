//Attributes
(function(quet){
    var ele, i, ii, attributes, value, result;
    
    quet.prototype.attr = function(nodeName, nodeValue){
        
        ele = quet.ele;
        
        for(i = 0; i < ele.length; i += 1){
            
            if(typeof nodeValue === 'string'){
                
                ele[i].setAttribute(nodeName, nodeValue);
                
            }else{
                
               return ele[i].getAttribute(nodeName, nodeValue); 
                
            }
            
        }
        return this;
    }
    
    quet.prototype.addClass = function(className){
        
        ele = quet.ele;
        
        for(i = 0; i < ele.length; i += 1){
            value = ele[i].getAttribute('class'); 
            if(value !== '' && value !== null){
                result = [];
                value = value.split(' ');
                for(ii = 0; ii < value.length; ii += 1){
                    if(value[ii] !== className && value[ii] !== '' && value[ii] !== null){
                        result.push(value[ii]);
                    }
                }
                ele[i].setAttribute('class', result.join(' ') + ' ' + className);
            }
            ele[i].className = className;
        }
        return this;
        
    }
    
    quet.prototype.removeClass = function(className){
        
        ele = quet.ele;
        
        for(i = 0; i < ele.length; i += 1){
            
            value = ele[i].getAttribute('class');
            if(value !== '' || value === null){
                
                value = value.split(' ');
                result = [];
                
                for(ii = 0; ii < value.length; ii += 1){
                    
                    if(value[ii] !== className && value[ii] !== ''){
                        result.push(value[ii]);
                    }
                    
                }
                
                ele[i].setAttribute('class', result.join(' '));
            }
            
        }
        
        return this;
        
    }
    
}(quet));


