// 需要实现的函数
function repeat(func, times, wait) {
    let count = 0;
    return function fun(...args) {
        if (times === count) return;
        setTimeout(() => {
            func.apply(this, arguments)
            count++;
            fun(...args);
        }, wait)
    }

}
// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 1000);
repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔3秒