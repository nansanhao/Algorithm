function a(num) {
    let count = 0;
    while (num !== 0) {
        if (num % 3 === 0) {
            num = num / 3;
        } else if (num % 8 === 0) {
            num = num / 8;
            count = count + 2;
        } else {
            num = num - 1;
        }
        count++;
        // console.log(num, count)
    }
    return count;
}
console.log(a(50))

function getNum(num) {
    let result = [0, 1, 2, 2];
    for (let i = 4; i <= num; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            result.push(Math.min(result[i / 3], result[i / 2], result[i - 1]) + 1)
        } else if (i % 3 === 0) {
            result.push(Math.min(result[i / 3], result[i - 1]) + 1)
        } else if (i % 2 === 0) {
            result.push(Math.min(result[i / 2], result[i - 1]) + 1)
        } else {
            result.push(result[i - 1] + 1)
        }
        // console.log()
    }
    console.log(result)
}
getNum(50)

// console.log(a(17))



