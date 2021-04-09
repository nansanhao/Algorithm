/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let num = '';
    let preSign = '+'

    for (let i = 0, len = s.length; i < len; i++) {
        if (!isNaN(s[i])) {
            num += s[i];
        }
        if (isNaN(s[i]) || i === len - 1) {
            let curr = parseInt(num);
            switch (preSign) {
                case '+':
                    stack.push(curr)
                    break;
                case '-':
                    stack.push(-1 * curr)
                    break;
                case '*':
                    stack.push(stack.pop() * curr)
                    break;
                case '/':
                    stack.push(stack.pop() / curr | 0)
                    break;
            }
            num = '';
            preSign = s[i]
        }
    }
    return stack.reduce((prev, curr) => {
        return prev + curr;
    })
};

let str = "14-3/2"
console.log(calculate(str))
console.log(eval(str))

