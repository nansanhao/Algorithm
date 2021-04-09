// String.prototype.indexOf = function (target) {
//     let regx = new RegExp(target);
//     let result = this.match(regx)
//     if (result) {
//         return result.index;
//     } else {
//         return -1;
//     }
// }

// console.log('abcdefg'.charAt(3))
// JSON.stringify

// 模拟块级作用域
for (let i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(function () {
        console.log(i);
    }, 1000 * j);
}

for (var i = 0; i < 3; i++) {
    console.log(i);
    (function (j) { // j = i
        setTimeout(function () {
            console.log(j);
        }, 1000 * j);
    })(i);
}


for (var i = 0; i < 3; i++) {
    console.log(i);
    try {
        throw i
    } catch (v) {
        setTimeout(function () {
            console.log(v);
        }, 1000);
    }
}


