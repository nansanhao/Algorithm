var checkInclusion = function (s1, s2) {
    let s1Arr = s1.split('');
    let s1Counter = {}
    let currCounter = {}
    s1Arr.forEach(element => {
        if (s1Counter[element]) {
            s1Counter[element]++;
        } else {
            s1Counter[element] = 1;
            currCounter[element] = 0;
        }
    });
    console.log(s1Counter)

    let left = 0;
    let right = s1Arr.length - 1;

    for (let i = 0; i <= right; i++) {
        currCounter[s2[i]] !== undefined && currCounter[s2[i]]++;
    }
    console.log(currCounter)

    while (right < s2.length) {
        let flag = 1;
        for (let key in s1Counter) {
            if (!currCounter[key] || currCounter[key] !== s1Counter[key]) {
                flag = 0;
                break;
            }
        }
        console.log("currCounter", currCounter)
        if (flag === 1) {
            return true;
        }
        console.log(left, right)
        // console.log(s2[right + 1], currCounter[s2[right + 1]])
        s2[right + 1] && currCounter[s2[right + 1]] !== undefined && currCounter[s2[right + 1]]++;
        currCounter[s2[left]] && currCounter[s2[left]]--;


        left++;
        right++;

        // console.log("currCounter", currCounter)
    }
    return false

}

console.log(checkInclusion("a", "ab"))



