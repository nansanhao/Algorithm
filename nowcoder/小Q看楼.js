// 6
// 5 3 8 3 2 5
function getSee(array) {
    let stack = []
    let size = array.length;
    let result = new Array(size).fill(1);
    for (let i = 0; i < size; i++) {
        result[i] += stack.length;
        while (stack[stack.length - 1] && stack[stack.length - 1] <= array[i]) {
            stack.pop();
        }
        stack.push(array[i]);
    }
    stack = [];
    for (let i = size - 1; i >= 0; i--) {
        result[i] += stack.length;
        while (stack[stack.length - 1] && stack[stack.length - 1] <= array[i]) {
            stack.pop();
        }
        stack.push(array[i]);
    }
    return result
}

console.log(getSee([5, 3, 8, 3, 2, 5]))
