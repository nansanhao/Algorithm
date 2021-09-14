function searchInsert(A, target) {
    // write code here
    if (A.length === 0) {
        return 0
    } else if (A.length === 1) {
        return A[0] > target ? 1 : 0
    }
    const flag = A[0] <= A[1] ? 1 : 0;
    let mid = 0;
    let left = 0;
    let right = A.length - 1;
    console.log(flag)
    while (left <= right) {
        mid = Math.floor((right + left) / 2)
        console.log(left, mid, right)
        if (A[mid] === target) {
            return mid
        } else if (A[mid] < target) {
            if (!flag) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        } else {
            if (flag) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
    }
    return left;
}

console.log(searchInsert([10, 30, 50, 60], 50))