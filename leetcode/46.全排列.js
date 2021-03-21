var permute = function (nums) {
    let results = [];
    const fun = (path, options) => {
        if (!options.length) {
            results.push(path);
        }
        options.forEach((item, index) => {
            fun([...path, item], options.filter(ele => ele !== item))
        })
    };
    fun([], nums);
    return results;
};

console.log(permute([1, 2, 3]))