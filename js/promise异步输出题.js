// node中微任务process.nextTick优先于promise.then优先于await,
// 所以，如果你在node中执行以下代码
async function a1() {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
}
async function a2() {
    console.log('a2')
}

async function a3() {
    console.log('a3 start')
    await a4()
    console.log('a3 end')
}
async function a4() {
    console.log('a4')
}

console.log('1---script start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('promise1')
})

a1()
a3()


let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
process.nextTick(() => {
    console.log('nextTick')
})
console.log('script end')

// 执行结果会是
// script start
// a1 start
// a2
// a3 start
// a4
// promise2
// script end
// nextTick
// promise1
// promise2.then
// promise3
// a1 end
// a3 end
// setTimeout
