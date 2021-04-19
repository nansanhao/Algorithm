// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = function getList(array) {
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
