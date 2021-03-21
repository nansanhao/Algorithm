var findKthLargest = function (nums, k) {
    const exchange = (nums, left, right) => {
        let base = nums[left];
        while (left < right) {
            while (nums[right] <= base && right > left) {
                right--
            }
            nums[left] = nums[right];
            while (nums[left] >= base && right > left) {
                left++
            }
            nums[right] = nums[left];
            // console.log(nums, left, right)
        }
        nums[right] = base
        // console.log(nums, left, right)
        return (left + 1)
    }

    const find = (nums, left, right, k) => {
        // console.log(nums, left, right, k)
        let number = exchange(nums, left, right);
        // console.log(nums, left, right, k)
        // console.log(number)
        if (number < k) {
            return find(nums, number, right, k)
        } else if (number > k) {
            return find(nums, left, number - 1, k)
        } else {
            return nums[k - 1]
        }
    }
    return find(nums, 0, nums.length - 1, k)

};



console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
// const exchange = (nums, left, right) => {
//     let base = nums[left];
//     while (left < right) {
//         while (nums[right] <= base && right > left) {
//             right--
//         }
//         nums[left] = nums[right];
//         while (nums[left] >= base && right > left) {
//             left++
//         }
//         nums[right] = nums[left];
//         console.log(nums, left, right)
//     }
//     nums[right] = base
//     console.log(nums, left, right)
//     return (left + 1)
// }
// console.log(exchange([
//     6, 5, 5, 4, 3,
//     3, 2, 1, 2
// ], 2, 2))