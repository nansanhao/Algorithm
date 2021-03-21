function fun(l, array) {
    array.sort((a, b) => a.start - b.start)
    console.log(array)
    if (array[0].start > 0) {
        return -1;
    }
    let start = 0;
    let count = 0;
    while (start < l) {
        let max = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i].start <= start && array[i].end > start) {
                max = max > array[i].end ? max : array[i].end;
            } else if (array[i].start > start) {
                break;
            }
        }

        if (max === -1) {
            return -1;
        }
        // console.log(max)
        start = max
        count++;
    }

    // console.log(count)
    return count
}

let a = [
    { start: 5, end: 24 },
    { start: 8, end: 27 },
    { start: 9, end: 19 },
    { start: 3, end: 17 },
    { start: 13, end: 18 },
    { start: 9, end: 25 },
    { start: 19, end: 29 },
    { start: 12, end: 15 },
    { start: 25, end: 29 },
    { start: 0, end: 6 },
]
let b = [
    { start: 0, end: 4 },
    { start: 5, end: 24 },
    { start: 23, end: 28 },
]


// [
//     { start: 0, end: 2 },
//     { start: 2, end: 4 },
//     { start: 3, end: 6 },
//     { start: 4, end: 7 }
//   ]

console.log(fun(28, a))