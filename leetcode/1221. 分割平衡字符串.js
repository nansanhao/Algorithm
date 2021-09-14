/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;
    let rCount = 0, lCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') lCount++;
        if (s[i] === 'R') rCount++;

        if (rCount === lCount) {
            count++;
            rCount = 0;
            lCount = 0;
        }
    }
    return count;
};
console.log(balancedStringSplit("RLLLLRRRLR"));