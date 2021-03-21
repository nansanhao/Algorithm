function reverseNum(num) {
    let flag = 0;
    let string = '';
    if (num > 0) {
        flag = 1;
        string += num;
    } else if (num === 0) {
        return 0;
    } else {
        flag = -1;
        string += -num;
    }
    return parseInt(string.split('').reverse().join('')) * flag;
}

console.log('result:', reverseNum(-123456))