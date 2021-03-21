// function isValid(str) {
//     // write code here
//     let patt = /\(\)|\{\}|\[\]/g
//     while (patt.test(str)) {
//         const str = str.match(patt);
//         str.replace(patt, '');
//     }
//     return str === ''
// }

// console.log(isValid('({}[]([]))'))
function getTreeDepth(arr) {
    // write code here
    let min = -1;
    const getDepth = (arr, index, depth) => {
        if (min !== -1 && depth > min) {
            return;
        }
        if (arr[index]) {
            if (!arr[2 * index + 1] && !arr[2 * index + 2]) {
                if (min === -1) {
                    min = depth + 1;
                } else {
                    min = Math.min(min, depth + 1);
                }
            }
            getDepth(arr, 2 * index + 1, depth + 1);
            getDepth(arr, 2 * index + 2, depth + 1);
        }
        // console.log(depth)
    }
    getDepth(arr, 0, 0);
    return min;
}

console.log(getTreeDepth([3, null, 20, null, null, 15, 7]))

var combinationSum = function (candidates, target) {
    let result = [];
    let resultObj = {}
    const getNum = (arr, target) => {
        for (let i = 0, len = candidates.length; i < len; i++) {
            const curr = candidates[i];
            const newArr = arr.concat(curr);
            if (target === curr) {
                const key = JSON.stringify(newArr.sort());
                if (!resultObj[key]) {
                    result.push(newArr);
                    resultObj[key] = true;
                }
            } else if (target > curr) {
                getNum(newArr, target - curr);
            }
        }
    }

    getNum([], target);
    console.log(result)
    const a = [];


};
combinationSum([2, 3, 5], 8)