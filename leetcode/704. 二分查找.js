/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let mid = Math.floor(nums.length / 2);
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        } else {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        }
    }
    return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9))