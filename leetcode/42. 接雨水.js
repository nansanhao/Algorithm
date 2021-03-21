var trap = function (height) {
    let size = height.length
    let stack = [];
    let result = new Array(size);
    let sum = 0;
    for (let i = 0; i < size; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
            stack.pop();
        }
        !result[i] && (result[i] = {});
        if (stack.length > 0 && stack[0] > height[i]) {
            result[i].left = stack[0];
        } else {
            result[i].left = 0;
        }
        stack.push(height[i]);
    }
    stack = [];
    for (let i = size - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
            stack.pop();
        }
        if (stack.length > 0 && stack[0] > height[i]) {
            result[i].right = stack[0];
        } else {
            result[i].right = 0;
        }
        let top = Math.min(result[i].left, result[i].right);
        sum += top > height[i] ? top - height[i] : 0;
        stack.push(height[i]);
    }
    return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))