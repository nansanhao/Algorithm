var lengthOfLIS = function (nums) {
    let maxLen = 0;
    let result = [];
    nums.forEach((item, index) => {
        if (index === 0) {
            result.push({ len: 1, min: item });
            maxLen = 1;
        } else {
            let max = 1;
            let min = item;

            for (let i = 0, len = result.length; i < len; i++) {
                if (item > result[i].min) {

                    let curr = result[i].len + 1
                    if (curr > max) {
                        max = curr;
                        min = item;
                    }
                }
            }
            result.push({ len: max, min: min });
            maxLen = Math.max(maxLen, max)
        }
    })
    console.log(result)
    return maxLen;
};

const lengthOfLIS2 = function (nums) {
    const len = nums.length;
    const res = new Array(len).fill(0);
    res[0] = nums[0];
    let resLen = 1;
    for (let i = 0; i < len; i++) {
        const curr = nums[i];
        for (let j = 0; j < resLen; j++) {
            if (curr > res[j]) {
                if (j + 1 >= resLen || ((j + 1 < resLen) && res[j + 1] >= curr)) {
                    res[j + 1] = curr;
                    resLen = Math.max(j + 2, resLen);
                    break;
                }
            } else {
                res[j] = curr;
                break;
            }
        }
        // console.log(res)
    }

    return resLen;
}

console.log(lengthOfLIS2([4,10,4,3,8,9]))
console.log(lengthOfLIS2([10,9,2,5,3,7,101,18]))