
var numberArr = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9
};
var nameArr = {
    十: { value: 10, myUnit: false },
    百: { value: 100, myUnit: false },
    千: { value: 1000, myUnit: false },
    万: { value: 10000, myUnit: true },
    亿: { value: 100000000, myUnit: true }
}
function ChineseToNumber(chnStr) {
    var rtn = 0;
    var section = 0;
    var number = 0;
    var myUnit = false;
    var str = chnStr.split('');

    for (var i = 0; i < str.length; i++) {
        var num = numberArr[str[i]];
        if (typeof num !== 'undefined') {
            number = num;
            if (i === str.length - 1) {
                section += number;
            }
        } else {
            var unit = nameArr[str[i]].value;
            myUnit = nameArr[str[i]].myUnit;
            if (myUnit) {
                section = (section + number) * unit;
                rtn += section;
                section = 0;
            } else {
                section += (number * unit);
            }
            number = 0;
        }
    }
    return rtn + section;
}
console.log(ChineseToNumber('一万三千五百'))