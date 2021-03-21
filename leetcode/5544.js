let s = "addbsd"
// var maxUniqueSplit = function (s) {
//     let result = []
//     let results = []
//     let cut = function (str) {
//         if (str === '') {
//             return true
//         }
//         for (let i = 0, len = str.length; i < len; i++) {
//             let s = str.slice(0, i + 1)
//             if (!result.includes(s)) {
//                 result.push(s)
//                 if (cut(str.slice(i + 1, len))) {
//                     return true
//                 }
//                 result.pop()
//             }
//         }
//         return false
//     }


//     while (1) {
//         cut(s)
//         results.push(JSON.stringify(result))
//         result = 0
//     }



// };
var maxUniqueSplit = function (s) {
    if (s.length = 1)
        let result = []
    for (let i = 0, len = s.length; i < len; i++) {
        result = []
        let left = maxUniqueSplit(s.slice(0, i + 1))
        let right = maxUniqueSplit(i + 1, len)
        let temp = new Set(left.concat(right))
        if (temp.length < left.length + right.length) {
            continue
        } else {
            if (temp.length > result.length) {
                result = Array.from(temp)
            }
        }

    }
    if (result.length == 0) {
        result.push(s)
    }
    return result
}
console.log(maxUniqueSplit(s))