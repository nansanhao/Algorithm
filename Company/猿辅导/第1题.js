/** 
 * 第一题
 */

function search(nums) {
    let changeTimes = 0;
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        if (nums[i + 1] && nums[i] < nums[i + 1]) {
            changeTimes++;
            if (changeTimes > 1) {
                return 'N';
            }
        }
    }
    if (changeTimes === 1 && nums[nums.length - 1] >= nums[0]) {
        return 'Y';
    } else if (changeTimes === 0) {
        return 'Y';
    }
    return 'N';
}

console.log(search([4, 13, 9, 5, 5]))