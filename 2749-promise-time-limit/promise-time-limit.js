
var timeLimit = function(fn, t) {
    return async function(...args) {
        let oripromise = fn(...args);
        let timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(()=>reject('Time Limit Exceeded'), t)
        })
        return Promise.race([oripromise, timeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */