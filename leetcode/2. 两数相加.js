
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function getList(array) {
    let list = null;
    let temp = null;
    array.map(item => {
        let node = new ListNode(item);
        if (list) {
            temp.next = node;
            temp = temp.next;
        } else {
            list = node;
            temp = node;
        }
    })
    return list
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2, tag = 0) {
    if (l1 && l2) {
        let sum = l1.val + l2.val + tag;
        tag = sum >= 10 ? 1 : 0;
        l1.val = sum % 10;
        if (!l1.next && l2.next) {
            l1.next = l2.next;
            l2.next = null;
        } else if (!l1.next && !l2.next && tag === 1) {
            let node = new ListNode(1);
            l1.next = node;
            return l1;
        }
        addTwoNumbers(l1.next, l2.next, tag);
    } else if (!l1 && l2) {
        return l2;
    } else if (l1 && !l2) {
        if (tag) {
            let sum = l1.val + tag;

            tag = sum >= 10 ? 1 : 0;
            l1.val = sum % 10;
            if (!l1.next && tag === 1) {
                let node = new ListNode(1);
                l1.next = node;
                return;
            }
            addTwoNumbers(l1.next, null, tag);
        }
    }
    return l1;
};
// console.log(JSON.stringify(addTwoNumbers(getList([9, 9, 9, 9, 9, 9, 9,]), getList([9, 9, 9]))))
// console.log(JSON.stringify(addTwoNumbers(getList([2, 4, 3]), getList([5, 6, 4]))))
// console.log(JSON.stringify(addTwoNumbers(getList([2, 4, 9]), getList([5, 6, 4, 9]))))
console.log(JSON.stringify(addTwoNumbers(getList([9, 9, 1]), getList([1]))))
// getList([2, 4, 3])