function isValid(s) {
    let stack = [], length = s.length;
    if (length % 2) return false;
    for (let item of s) {
        switch (item) {
            case "{":
            case "[":
            case "(":
                stack.push(item);
                break;
            case "}":
                if (stack.pop() !== "{") return false;
                break;
            case "]":
                if (stack.pop() !== "[") return false;
                break;
            case ")":
                if (stack.pop() !== "(") return false;
                break;
        }
    }
    return !stack.length;
};

function isValid2(str) {
    let len = str.length;
    if (len & 1) return false;
    const stack = []
    let tagObj = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let i = 0; i < len; i++) {
        let item = str[i];
        if (tagObj[item]) {
            if (stack.pop() !== tagObj[item]) return false;
        } else {
            stack.push(item);
        }
    }
    return !stack.length
}
console.log(isValid2('({}[])'))


const f1=throttle(func);