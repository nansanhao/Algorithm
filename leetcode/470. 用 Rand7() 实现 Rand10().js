/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand7 = function () { return 1 }
var rand10 = function () {
    while (true) {
        let num = rand7() * 7 - rand7() + 1
        let res = num % 10
        if (num > 40) {
            num = res * 7 - rand7() + 1
            res = num % 10
            if (num > 60) {
                num = res * 7 - rand7() + 1
                res = num % 10
                if (num <= 20) {
                    return res;
                }
            } else {
                return res;
            }
        } else {
            return res;
        }
    }
};
console.log(rand10());