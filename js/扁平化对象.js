function flat(object) {
    const flatObj = (prev, curr) => {
        let result = {};
        if (curr instanceof Array) {
            for (let itemKey in curr) {
                let nextKey = prev + '[' + itemKey + ']'
                result = {
                    ...result,
                    ...flatObj(nextKey, curr[itemKey])
                }
            }
        } else if (curr instanceof Object) {
            for (let itemKey in curr) {
                let nextKey = prev + '.' + itemKey
                result = {
                    ...result,
                    ...flatObj(nextKey, curr[itemKey])
                }
            }
        } else {
            result[prev] = curr
        }
        return result;
    }
    let result = {};
    for (let key in object) {
        let value = object[key]
        result = {
            ...result,
            ...flatObj(key, value)
        }
    }
    return result;
}






let a = {
    a: 'a-v',
    b: 'b-v',
    // c: null,
    c: {
        f: [1, 2, 3, { a: [6, 7, 8] }]
    },
    d: ['a', 'b']
}
// let b = ['a', 'b']
console.log(flat(a))