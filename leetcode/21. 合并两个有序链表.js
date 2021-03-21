var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let result = null;
    let pTemp = null;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            if (!result) {
                result = l2;
                pTemp = result;
            } else {
                pTemp.next = l2;
                pTemp = pTemp.next;
            }
            l2 = l2.next;
        } else {
            if (!result) {
                result = l1;
                pTemp = result;
            } else {
                pTemp.next = l1;
                pTemp = pTemp.next;
            }
            l1 = l1.next;
        }

    }
    if (l1 && pTemp) {
        pTemp.next = l1
    }
    if (l2 && pTemp) {
        pTemp.next = l2
    }
    return result;

};

let L1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}

let L2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

let L3 = {
    val: 0,
    next: null
}

console.log(mergeTwoLists(null, L3))