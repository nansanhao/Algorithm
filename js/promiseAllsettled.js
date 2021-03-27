Promise.allSettled = function (promises) {
    let count = 0;
    let promiseNum = promises.length;
    let result = new Array(promiseNum);
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseNum; i++) {
            promises[i].then((res) => {
                count++;
                result[i] = res;
                if (count === promiseNum) {
                    resolve(result);
                }
            }).catch((reason) => {
                count++;
                result[i] = reason;
                if (count === promiseNum) {
                    reject(result);
                }
            })
        }
    })

}