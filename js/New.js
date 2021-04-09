function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype);
    let res = fn.apply(instance, args);
    return typeof res === 'object' ? res : instance;
}

function myNew2(fn, ...args) {
    let obj = {};
    fn.apply(obj, args);
    obj.__proto__ = fn.prototype;
    // Object.setPrototypeOf(obj, Con.prototype)
    return typeof obj === 'object' ? res : instance;
}

// 实现instanceof 
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto == null) return false;
        if (proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}