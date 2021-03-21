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

console.log(lengthOfLIS([3, 1, 2]))