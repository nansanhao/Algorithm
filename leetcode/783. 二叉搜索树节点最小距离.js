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
 * @return {number}
 */


var minDiffInBST = function (root) {
    let min;
    let pre = -1;
    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        if (pre !== -1) {
            if (min === undefined) {
                min = root.val - pre;
            } else {
                min = Math.min(min, root.val - pre);
            }
        }
        pre = root.val;
        dfs(root.right)
    }
    dfs(root);
    return min;
};

let tree = {
    val: 27,
    left: null,
    right: {
        val: 34,
        left: null,
        right: {
            val: 58,
            right: null,
            left: {
                val: 50,
                right: null,
                left: {
                    val: 44,
                    left: null,
                    right: null
                }
            }
        }
    }
}
minDiffInBST(tree)