// https://res.wx.qq.com/F.js,E.js,D.js,C.js,B.js,A.js,page.js
const requireTree = {
    "name": "page.js",
    "require": [{
        "name": "A.js",
        "require": [{
            "name": "C.js",
            "require": [{
                "name": "F.js"
            }]
        }]
    }, {
        "name": "B.js",
        "require": [{
            "name": "D.js",
            "require": [{
                "name": "F.js"
            }]
        }, {
            "name": "E.js",
            "require": []
        }]
    }]
}

let queue = [];
const result = [];
const BFS = (root) => {
    if (!root) return;
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.require && node.require.length > 0) {
            queue = queue.concat(node.require);
        }
        result.push(node.name);
    }
    console.log(result)
}
BFS(requireTree)
