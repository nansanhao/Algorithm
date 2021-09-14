function getPerfect(str) {
    const strArr = str.split('');
    console.log(strArr)
    let flag = 0;
    let count = 0;
    let flag2 = 0;
    for (let i = 0; i < strArr.length; i++) {

        if (strArr[i] == 1) {
            count++;
        }
        if (!flag) {
            console.log(strArr, count, strArr[i])
            if (strArr[i] == 0) {
                if (count === 0) {
                    strArr[i - 1] = parseInt(strArr[i - 1]) - 1;
                } else {
                    i = i - count
                    console.log(i)
                    if (strArr[i - 1]) {
                        strArr[i - 1] = parseInt(strArr[i - 1]) - 1;
                    } else {
                        flag2 = true
                    }
                }
                flag = true;
            } else if (parseInt(strArr[i]) > 3) {
                flag = true;
            }
        }
        if (flag) {
            strArr[i] = '3'
        }
        if (flag2) {
            strArr[i] = ''
            flag2 = false
        }
        if (strArr[i] != 1) {
            count = 0;
        }

    }
    return strArr.join('')
}
console.log(getPerfect('1110'))
console.log(getPerfect('213'))