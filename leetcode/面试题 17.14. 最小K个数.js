/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
    const quickFind = (left, right) => {
        if (left < right) {
            const mid = sort(left, right);
            if (k > mid + 1) {
                quickFind(mid + 1, right);
            } else if (k < mid) {
                quickFind(left, mid);
            }
        }
        return arr.slice(0, k)
    }
    const sort = (start, end) => {
        // 取基准值
        let base = arr[start];
        let low = start;
        let high = end;
        while (low !== high) {
            // 从后往前，寻找比基准值小的值，赋给low位置(也就是取base值的位置)
            while (arr[high] >= base && high > low) {
                high--;
            }
            arr[low] = arr[high];
            // 从前往后，寻找比基准值大的值，赋给high位置
            while (arr[low] <= base && high > low) {
                low++;
            }
            arr[high] = arr[low];
        }
        arr[low] = base;
        return low;
    }
    return quickFind(0, arr.length - 1);
};
console.log(smallestK([10, 1, 3, 5, 7, 2, 4, 6, 8], 4))
console.log(smallestK([1, 2, 3], 0))