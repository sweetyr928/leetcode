/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;

    const roman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    for(let i=0;i<s.length;i++){
        const cur = roman[s[i]];
        const next = roman[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};