function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]

let buildTree = function (preorder, preLeft, preRight, inorder, inLeft, inRight) {
    // console.log(preLeft, ' ', preRight, ' ', inLeft, ' ', inRight)
    if (preRight < preLeft && inRight < inLeft) {
        return null
    }
    let rootVal = preorder[preLeft]
    let root = new TreeNode(rootVal)
    let index = 0
    for (let i = inLeft; i <= inRight; i++) {
        if (inorder[i] === rootVal) {
            break
        }
        index++
    }

    root.left = buildTree(preorder, preLeft + 1, preLeft + index, inorder, inLeft, inLeft + index - 1)
    root.right = buildTree(preorder, preLeft + index + 1, preRight, inorder, inLeft + index + 1, inRight)
    return root
}
var buildTree2 = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const rootVal = preorder[0];
    const node = new TreeNode(rootVal);

    let i = 0; // i有两个含义，一个是根节点在中序遍历结果中的下标，另一个是当前左子树的节点个数
    for (; i < inorder.length; ++i) {
        if (inorder[i] === rootVal) {
            break;
        }
    }

    node.left = buildTree2(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree2(preorder.slice(i + 1), inorder.slice(i + 1));
    return node;
};

console.log(buildTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1))
console.log(buildTree2(preorder, inorder))