/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    const getNodes = (node, n) => {
        if (!node) return;
        if (res[n] !== undefined) {
            res[n].push(node.val)
        } else {
            res.push([node.val])
        }
        getNodes(node.left, n + 1);
        getNodes(node.right, n + 1);
    }
    getNodes(root, 0);
    return res;
};
var levelOrder2 = function (root) {
    const res = [];
    if (!node) return res;
    const queue = [root];
    while (queue.length > 0) {
        const len = queue.length;
        res.push([]);
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            res[res.length - 1].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};
const a = {
    val: 3,
    left: {
        val: 9,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    }
}
console.log(levelOrder2(a))