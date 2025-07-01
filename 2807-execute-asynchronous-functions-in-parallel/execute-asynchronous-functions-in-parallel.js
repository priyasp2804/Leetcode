/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res, rej) => {
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn,i) => {
            fn()
            .then(val => {
                results[i] = val;
                count++;
                if(count==functions.length)
                    return res(results);
            })
            .catch(rej);
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */