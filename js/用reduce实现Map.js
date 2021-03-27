// 用reduce实现Map
Array.prototype.myMap = function (callback) {
    const res = []
    this.reduce((pre, curr, currIndex) => {
        res.push(callback(curr, currIndex, this))
    }, null);
    return res
}

let arr = new Array(1, 2, 3);

console.log(arr)
console.log(arr.myMap(item => item * 2))