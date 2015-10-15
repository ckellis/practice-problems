var arrShift = function(n, arr){
    return [].concat((arr.splice(arr.length-n, n)), arr);
};