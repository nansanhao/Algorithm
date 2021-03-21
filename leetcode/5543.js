let text = " practice   makes   perfect"
let count = 0
let left = -1
let right = -1
for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        count++
    } else {
        if (left === -1) {
            left = i
        }
        right = i
    }
}
let result = text.slice(left, right + 1)
let temp = result.split(/\s+/)
let spaceNum = (count / (temp.length - 1)) | 0
let content = ''
let bottom = ''
for (let i = 0; i < spaceNum; i++) {
    content += ' '
}
for (let i = 0; i < (count - spaceNum * (temp.length - 1)); i++) {
    bottom += ' '
}

console.log(temp.join(content) + bottom)
// console.log(a)
// result.replace(/\s+/g, )
console.log(result)
console.log(count)