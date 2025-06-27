var argumentsLength = function(...args) {
    let count = 0;
    for(let n of args)
        count++;
    return count;
};
