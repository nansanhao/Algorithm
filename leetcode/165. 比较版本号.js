/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let arr1 = version1.split('.').map(item => parseInt(item));
    let arr2 = version2.split('.').map(item => parseInt(item));
    let len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        let value1 = arr1[i] ? arr1[i] : 0;
        let value2 = arr2[i] ? arr2[i] : 0;
        if (value1 > value2) {
            return 1;
        } else if (value1 < value2) {
            return -1;
        }
    }

    return 0;
};


console.log(compareVersion('7.5.2.4', '7.5.3'))