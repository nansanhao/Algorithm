// 实现一个run方法，使得run(fucArr)能顺序输出1、2、3
const fucArr = [
    next => { setTimeout(() => { console.log(1); next() }, 300) },
    next => { setTimeout(() => { console.log(2); next() }, 200) },
    next => { setTimeout(() => { console.log(3); next() }, 100) }
];

function run(arr) {
    new Promise(resolve => {
        if (arr.length > 0) {
            const fun = arr.shift();
            fun(() => {
                resolve();
            })
        }
    }).then(() => {
        if (arr.length > 0) {
            run(arr);
        }
    })
}

run(fucArr)