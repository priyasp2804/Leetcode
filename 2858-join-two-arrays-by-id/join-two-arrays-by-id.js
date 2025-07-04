var join = function(arr1, arr2) {
    let obj = {};
    arr1.forEach((val) => obj[val.id] = val);
    arr2.forEach((val) => obj[val.id] = {
        ...obj[val.id] ?? {}, ...val
    });
    return Object.values(obj);
}; 