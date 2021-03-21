function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
function prop2<T>(obj: T, key: keyof T) {
    return obj[key];
}

let o = {
    p1: 0,
    p2: ''
}

let v = prop(o, 'p1') // is number, K is of type 'p1'
let v2 = prop2(o, 'p1') // is number | string, no extra info is captured
console.log(v)
console.log(v2)