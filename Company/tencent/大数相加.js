function addByBigInt(a, b) {
    console.log((BigInt(a) + BigInt(b)).toString())
    // return new BigInt(a) + new BigInt(b)
}

addByBigInt('9007199254740991', '1234567899999999999')

function add(a, b) {
    let a = '0' + a;
    let b = '0' + b;
    let len;
    if (a.length > b.length) {
        len = a.length;
        b.padStart
    } else {
        len = b.length;
    }
    let len = Math.max(a.length, b.length);

}