
function throttle(callback, interval = 200) {
    let tag = true;
    return function () {
        if (!tag) return;
        tag = false;
        setTimeout(() => {
            callback.apply(this, arguments);
            tag = true;
        }, interval);
    }
}

function debounce(callback, interval = 200) {
    let timer = null;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, arguments);
        }, interval)
    }
}

Function.prototype.myBind = (context, ...args1) => {
    let that = this;
    return function (...args2) {
        that.apply(context, args1.concat(args2));
    }
}

