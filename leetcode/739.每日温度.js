var dailyTemperatures = function (T) {
    let stack = [];
    let result = new Array(T.length).fill(0);
    for (let i = 0, len = T.length; i < len; i++) {
        if (stack.length > 0) {
            while (stack[stack.length - 1] && stack[stack.length - 1].value < T[i]) {
                let { index, value } = stack.pop();
                result[index] = i - index;
            }
        }
        stack.push({ index: i, value: T[i] });
    }
    return result
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])