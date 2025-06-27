var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc,f)=>f(acc),x)
    }
};