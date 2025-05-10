var createCounter = function(init) {
    var i = init;
    return {
        increment: function(){
            return ++i;
        },
        reset: function(){
            return i=init;
        },
        decrement: function(){
            return --i;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */