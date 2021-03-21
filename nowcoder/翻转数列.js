
// function reverse(n, m) {
//     return m * m * n / (2 * m)
// }

// console.log(reverse(4, 1))
let m = 58, n = 80;
const getNum = (num, start) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += start;
        start = Math.ceil(start / 2);
    }
    return sum;
}
let number = 0;
let left = 0, right = n;
while (left < right) {
    console.log(left, right, number)
    let mid = Math.ceil((left + right) / 2);
    let num = getNum(m, mid)
    if (num <= n) {
        number = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
console.log(number)