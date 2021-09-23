function getCount(graph) {
    let count = 0;
    let res = [];
    function dfs(path, options) {
        console.log('dfs', path, options)
        let tag = 1;
        colors.forEach(element => {
            if (path.indexOf(element + '') === -1) {
                tag = 0;
            }
        });
        if (tag) {
            count++;
        }
        for (let i = 0; i < options.length; i++) {
            const node = options[i];
            const newPath = path.concat(node);

            const newOptions = graph[node].filter(item => newPath.indexOf(item) === -1 && parseInt(item) > parseInt(node));
            dfs(newPath, newOptions);
        }
    }
    dfs([], Object.keys(graph));
    return count;
}
let g = {
    '1': ['2'],
    '2': ['3'],
    '3': ['4'],
    '4': ['5'],
    '5': ['4']
}
let colors = [1, 2, 3, 4, 1];
console.log(getCount(g, colors))