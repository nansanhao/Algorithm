/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
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
checkRecord("PPALLL");