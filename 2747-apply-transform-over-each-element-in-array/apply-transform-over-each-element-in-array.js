var map = function(arr, fn) {
    let ta = [];
    for(let i=0;i<arr.length;i++)
    ta.push(fn(arr[i],i))
    return ta
};