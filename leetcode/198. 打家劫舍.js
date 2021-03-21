/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    const result = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr;
        if (result[i - 2] && result[i - 3]) {
            curr = nums[i] + Math.max(result[i - 2], result[i - 3])
        } else if (result[i - 2] && !result[i - 3]) {
            curr = nums[i] + result[i - 2];
        } else if (!result[i - 2] && !result[i - 3]) {
            curr = nums[i];
        }
        result.push(curr);
        max = Math.max(max, curr);
    }
    return max;
};

console.log(rob([2, 7, 9, 3, 1]))