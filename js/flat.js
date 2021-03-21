let array = [1, 2, 3, [4, 5], [[6, 7, [8]]]];
Array.prototype.myFlat = function (num = 1) {
    const flat = (arr, num) => {
        if (num <= 0 && num !== Infinity) {
            return arr;
        }
        return arr.reduce((pre, curr) => {
            return pre.concat(Array.isArray(curr) ? flat(curr, num - 1) : curr);
        }, [])
    }
    return flat(this, num)
}

console.log(array.myFlat(Infinity)) 