var stringMatch = function(str){
    var flag;
    var obj = {
        '(':')',
        '{':'}',
        '[':']'
    };
    
    var stack = [];
    var current;
    
    for(var i = 0; i < str.length; i++){
        if(str[i] in obj){
            stack.push(str[i]);
        } else {
            current = stack.pop();
            if (obj[current] !== str[i]) {
                return false;
            }
        }
    }
    
    return true;
};