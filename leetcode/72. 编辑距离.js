/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (!word1 || !word2) {
        return Math.max(word1.length, word2.length);
    }
    let width = word1.length + 1;
    let height = word2.length + 1;
    let map = [];
    for (let i = 0, len = Math.max(width, height); i < len; i++) {
        if (i < height) {
            map.push(new Array(width).fill(-1));
        }
        map[0][i] && (map[0][i] = i);
        map[i] && map[i][0] && (map[i][0] = i);
    }

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (word2[i - 1] === word1[j - 1]) {
                map[i][j] = map[i - 1][j - 1];
            } else {
                map[i][j] = Math.min(map[i - 1][j - 1], map[i][j - 1], map[i - 1][j]) + 1;
            }
        }
    }
    // console.log(map)
    return map[height - 1][width - 1];
};
minDistance('horse', 'ros')