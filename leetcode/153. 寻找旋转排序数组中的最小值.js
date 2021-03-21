var findMin = function (nums) {
    function find(nums, left, right) {
        console.log(nums, left, right)
        if (left === right) {
            return nums[left]
        }
        if (nums[left] < nums[right]) {
            return nums[left];
        } else {
            let mid = Math.floor((right + left) / 2);
            let midValue = nums[mid];
            if (nums[mid - 1] && nums[mid + 1] && midValue >= nums[mid - 1] && midValue > nums[mid + 1]) {
                return nums[mid + 1];
            }
            let leftValue = nums[left];
            let rightValue = nums[right];

            if (midValue <= leftValue) {
                if (midValue === leftValue) {
                    return find(nums, left, mid);
                }
                return find(nums, left, mid);
            } else if (midValue >= leftValue) {
                return find(nums, mid + 1, right)
            }
        }
    }
    return find(nums, 0, nums.length - 1)
};

console.log(findMin([3, 3, 3, 3, 3, 3, 3, 3, 1, 3]))