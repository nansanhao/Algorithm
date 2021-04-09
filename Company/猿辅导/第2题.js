// 
function func(nums, target) {
    nums = nums.filter(item => item <= target);
    let left = 0, right = 0;
    let count = 0;
    while (right < nums.length) {
        let value = 0;
        for (let i = left; i <= right; i++) {
            value = value | nums[i];
        }
        while (value <= target && right < nums.length) {
            // console.log(left, right)
            count++;
            right++;
            nums[right] && (value = value | nums[right])

        }
        left++;
        right = left;
    }
    console.log(count)
}

func([7, 6, 6, 5, 15], 14)
func([70, 15, 21, 96], 45)