/** 
 * 第一题
 * 7
1 2 3 4 5 6 7
 */

function func(arr) {
    if (arr.length < 3) return;
    arr.sort()
    let left = 0, right = 1;
    let curr = 2;
    let obj = {};
    let max = 0;
    while (curr < arr.length) {
        for (let i = curr; i < arr.length; i++) {
            if ((arr[left] + arr[right]) > arr[i]) {
                if (obj[arr[left]] !== undefined) {
                    obj[arr[left]]++;
                    max = Math.max(max, obj[arr[left]])
                } else {
                    obj[arr[left]] = 1;
                }

                if (obj[arr[right]] !== undefined) {
                    obj[arr[right]]++;
                    max = Math.max(max, obj[arr[right]])
                } else {
                    obj[arr[right]] = 1;
                }

                if (obj[arr[i]] !== undefined) {
                    obj[arr[i]]++;
                    max = Math.max(max, obj[arr[i]])
                } else {
                    obj[arr[i]] = 1;
                }
            } else {
                break;
            }
        }
        right++;
        curr++;
        if (right === arr.length - 1) {
            left++;
            right = left + 1;
            curr = right + 1;
        }

    }
    // console.log(obj)
    let nums = [];
    for (let key in obj) {
        if (obj[key] === max) {
            nums.push(key)
        }
    }
    nums.sort()
    console.log(nums.join(' '))
}

let triangleNumber = function (nums) {
    if (!nums || nums.length < 3) return 0
    let count = 0
    // 排序
    let result = []
    let max = 0;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
            while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                k++;
                result.push({ base: i, start: j, end: k })
            }

            count += k - j - 1;
        }
    }
    // console.log(result)
    let obj = {};
    for (let i = 0; i < result.length; i++) {
        let item = result[i]
        if (obj[item.base] !== undefined) {
            obj[item.base]++;
            max = Math.max(max, obj[item.base])
        } else {
            obj[item.base] = 1;
        }
        for (let j = item.start + 1; j <= item.end; j++) {
            if (obj[j] !== undefined) {
                obj[j]++;
                max = Math.max(max, obj[j])
            } else {
                obj[j] = 1;
            }
        }
    }
    let numbers = [];
    for (let key in obj) {
        if (obj[key] === max) {
            numbers.push(key)
        }
    }
    numbers.sort()
    console.log(numbers.join(' '))
    // console.log(obj)
}


let a = [1, 2, 3, 4, 5, 6, 7]
// func(a)
triangleNumber(a)