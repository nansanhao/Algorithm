/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const opLevel = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };
    const compare = (a, b) => {
        if (a === '(' || !opLevel[a]) return true;
        return opLevel[a] <= opLevel[b];
    };
    const calc = (a, b, op) => {
        switch (op) {
            case '+':
                return a + b;
                break;
            case '-':
                return a - b;
                break;
            case '*':
                return a * b;
                break;
            case '/':
                return a / b;
                break;
        }
    };

    let ops = [];
    let nums = [0];
    let len = s.length;

    for (let i = 0; i < len; i++) {
        let item = s[i];
        // console.log('Loop:', i, nums, ops, item)
        if (!isNaN(item)) {
            let num = ''
            while (!isNaN(s[i])) {
                // console.log(s[i], num)
                num += s[i];
                i++;
            }
            if (!isNaN(parseInt(num))) {
                nums.push(parseInt(num));
            }
            i--;
        }
        if (isNaN(item) || i === len - 1) {
            if (item === '(') {
                ops.push(item);
                if (s[i + 1] === '+') {
                    i++;
                } else if (s[i + 1] === '-') {
                    nums.push(0)
                }
            } else if (item === ')') {
                let op = ops.pop();
                let sum = nums.pop();
                while (op !== '(') {
                    let a = nums.pop();
                    sum = calc(a, sum, op);
                    op = ops.pop();
                }
                nums.push(sum);
            }
            if (opLevel[item] || i === len - 1) {
                let topOp;
                if (ops.length && compare(item, topOp = ops[ops.length - 1])) {
                    let b = nums.pop();
                    let a = nums.pop();
                    nums.push(calc(a, b, topOp))
                    ops.pop();
                }
                ops.push(item)
            }
        }

    }
    // console.log(nums, ops)
    return nums[nums.length - 1]
};

// calculate(' 1 + 1+( 3+2) ')
// calculate(' (-2+1) ')
// calculate('(1 + ( 4 +5+2) -3)+(6+ 8)')
// calculate("(1+(4+5+2)-3)+(6+8)")
calculate("1-(+1+1)")