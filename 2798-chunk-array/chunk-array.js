/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let a = [];
    for(let i=0;i<arr.length;i+=size)
        a.push(arr.slice(i,i+size));
    return a;
};
