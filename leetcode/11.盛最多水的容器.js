var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            max = Math.max((right - left) * height[left], max);
            left++;
        } else {
            max = Math.max((right - left) * height[right], max);
            right--;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))