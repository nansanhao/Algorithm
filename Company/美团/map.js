function getRadius(w, h, nodes) {
    let step = 0.1;
    let r = 1;
    let len = Math.pow(r, 2);
    function check(x, y) {
        // console.log(x, y);
        if (x < 0 || y < 0 || x > w || y > h) return false;
        for (let i = 0; i < nodes.length; i++) {
            let xL = x - nodes[i].x;
            let yL = y - nodes[i].y;
            if (xL * xL + yL * yL < len) {
                return false;
            }
        }
        return true;
    }
    function dfs(x, y) {
        if (check(x, y)) {
            return dfs(x + step, y) || dfs(x, y + step) ;
        }
        return false;
    }
    while (dfs(0, 0)) {
        r++;
        len = Math.pow(r, 2);
    };
    console.log(r)
    return r;
}
const nodes = [
    { x: 1, y: 2 },
    { x: 4, y: 4 },
    { x: 3, y: 0 },
    { x: 5, y: 2 }
]
getRadius(6, 4, nodes)