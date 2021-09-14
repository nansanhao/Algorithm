/**
 * @param {number} n
 * @return {number}
 */
const checkRecord2 = function (n) {
    const success = [];
    const failed = []
    var checkRecordInner = function (s) {
        let aCount = 0;
        let lCountMax = 0;
        let lCount = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'A') aCount++;
            if (s[i] === 'L') {
                lCount++
            } else {
                lCountMax = Math.max(lCountMax, lCount);
                lCount = 0;
            }
        }
        lCountMax = Math.max(lCountMax, lCount);
        return aCount < 2 && lCountMax < 3;
    };
    const getStr = (str) => {
        if (str.length === n) {
            checkRecordInner(str) ? success.push(str) : failed.push(str)
        } else {
            getStr(str + 'A');
            getStr(str + 'L');
            getStr(str + 'P');
        }
    }

    getStr('');
    console.log(success);
    console.log(failed);
}
// checkRecord2(3);

var checkRecord = function (n) {
    let count = 0;
    const getNum = (n, m = 0, pCount = 0) => {
        // LP PL P
        if (n === 0) {
            count += (Math.pow(2, m) + pCount);
            return;
        }
        if (n >= 2) {
            getNum(n - 2, m + 1, pCount + 1);
        }
        getNum(n - 1, m, pCount + 1);
    }
    getNum(n);
    console.log(count)
};
checkRecord(10101);