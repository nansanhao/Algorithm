// let n = 81, m = 4;
// let res = 0;
// for (let i = 0; i < m; i++) {
//     res += n;
//     n = Math.sqrt(n, 1 / 2);
// }
// console.log(res.toFixed(2));


// let line = 'cabac';
// let obj = {};
// let count = 0;
// for (let i = 0; i < line.length; i++) {
//     if (!obj[line[i]]) {
//         count++;
//         obj[line[i]] = true;
//     }
//     if (count > 1) break;
// }
// if (count > 1) {
//     console.log('NO')
// } else {
//     console.log('YES')
// }

function getCount(graph) {
    let count = 0;
    let res = [];
    function dfs(path, options) {
        // console.log('dfs', path, options)
        if (path.length === 5) {
            if (!res[JSON.stringify(path)]) {
                count++;
            }
            res[JSON.stringify(path)] = true;
        }
        for (let i = 0; i < options.length; i++) {
            const node = options[i];
            const newPath = path.concat(node);
            if (newPath.length > 1) {
                for (let i = newPath.length - 2; i >= 0; i--) {
                    if (newPath[i] < newPath[i + 1]) {
                        const temp = newPath[i];
                        newPath[i] = newPath[i + 1];
                        newPath[i + 1] = temp;
                    }
                }
            }

            const newOptions = graph[node].filter(item => newPath.indexOf(item) === -1);
            dfs(newPath, newOptions);
        }
    }
    dfs([], Object.keys(graph));
    return count;
}
let g = {
    '1': ['2', '6'],
    '2': ['1', '3'],
    '3': ['4', '6'],
    '4': ['3', '5'],
    '5': ['4', '6'],
    '6': ['1', '3', '5']
}
console.log(getCount(g))