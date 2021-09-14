/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    const projects = [];
    let res = w;
    let count = 0;
    profits.forEach((item, index) => {
        projects.push({ profit: item, capital: capital[index] });
    })
    projects.sort((a, b) => a.capital - b.capital);

    let nums = []
    for (let i = 0; i < projects.length;) {
        if (projects[i].capital <= res) {
            nums.push(projects[i]);
            if (nums.length >= 2) {
                for (let j = nums.length - 2; j >= 0; j--) {
                    if (nums[j].profit > nums[j + 1].profit) {
                        let temp = nums[j];
                        nums[j] = nums[j + 1];
                        nums[j + 1] = temp;
                    } else {
                        break;
                    }
                }
            }
            i++;
        } else {
            if (nums.length > 0) {
                res += nums.pop().profit;
                count++;
            } else {
                break;
            }
        }
        if (count === k) break;
    }
    while (count !== k && nums.length !== 0) {
        res += nums.pop().profit;
        count++
    }

    console.log('res: ', res)
    return res;
};
findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])
findMaximizedCapital(1, 0, [1, 2, 3], [1, 1, 2])