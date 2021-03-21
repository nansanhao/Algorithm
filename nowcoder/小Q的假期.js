// 0 1 0 1 0 0 0 1 0 1
// 0 0 0 1 1 1 0 1 0 1
function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== undefined && array[i] < min) {
            min = array[i]
        }
    }
    return min;
}
function fun(work, fitness) {
    let result = [];
    let size = work.length;
    for (let i = 0; i < size; i++) {
        if (i === 0) {
            let today = { rest: 1 };
            if (work[i]) {
                today.work = 0
            }
            if (fitness[i]) {
                today.fitness = 0
            }
            result.push(today);
        } else {
            let today = {};
            if (work[i]) {
                today.work = getMin([result[i - 1].rest, result[i - 1].fitness]);
            }
            if (fitness[i]) {
                today.fitness = getMin([result[i - 1].rest, result[i - 1].work]);
            }
            today.rest = getMin([result[i - 1].rest, result[i - 1].work, result[i - 1].fitness]) + 1;
            result.push(today);
        }
    }
    const { work: a, fitness: b, rest } = result[result.length - 1];
    console.log(result)
    return getMin([rest, a, b])
}

const a = [0, 1, 0, 1, 0, 0, 0, 1, 0, 1];
const b = [0, 0, 0, 1, 1, 1, 0, 1, 0, 1];

const c = [0, 1, 0, 0, 1, 1, 1, 0, 1, 1];
const d = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

console.log(fun(c, d))
// console.log(getMin([1, 4, undefined]))