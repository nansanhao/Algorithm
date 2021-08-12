/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let spaceCount = 0;
    let wordCount = 0;
    let flag = 0;
    for (let i = 0, len = text.length; i < len; i++) {
        if (text[i] === " ") {
            spaceCount++;
            if (flag === 1) {
                flag = 0;
                wordCount++;
            }
        } else {
            flag = 1;
        }
    }
    if (flag === 1) wordCount++;
    let str = "";
    let extraStr = "";
    if (wordCount === 1) {
        for (let i = 0; i < spaceCount; i++) {
            extraStr += " ";
        }
        return text.trim() + extraStr;
    }
    const num = Math.floor(spaceCount / (wordCount - 1));
    const extra = spaceCount % (wordCount - 1);

    for (let i = 0, len = Math.max(num, extra); i < len; i++) {
        if (i < num) str += " ";
        if (i < extra) extraStr += " ";
    }
    return text.trim().replace(/ +/g, str) + extraStr;
};

console.log(reorderSpaces("  hello"));
