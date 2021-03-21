// HG[3|B[2|CA]]F−>HG[3|BCACA]F−>HGBCACABCACABCACAF

function de(string) {
    const getString = (string) => {
        let result = ''
        let [num, str] = string.replace(/\[|\]/g, '').split('|')
        for (let i = 0; i < num; i++) {
            result += str
        }
        console.log(result)
        return result;

    }
    let word = /^[A-Z]*$/;
    let patt = /\[[0-9]+\|[[A-Z]+\]/;
    while (!word.test(string) && string.match(patt)) {
        const res = string.match(patt)[0]
        const replace = getString(res)
        string = string.replace(res, replace)
    }
    return string
}

// console.log(/\[[0-9]\|[[A-Z]+\]/.test('[3|ABC]'))de('HG[3|B[2|CA]]F')
// de('HG[3|B[2|CA]]F')
console.log(de(''))
console.log('HGBCACABCACABCACAF')