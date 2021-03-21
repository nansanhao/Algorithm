var reversePrint = function (head) {
    let result = []
    const print = function (arr, i) {
        if (arr[i + 1]) {
            print(arr, i + 1)
        }
        result.push(arr[i])
    }
    print(head, 0)
    return result
};
console.log(reversePrint([1, 3, 2]))