/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(str) {
    let stack = [];
    let currStr = '';
    let currNum = 0;

    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '[') {
            stack.push(currStr);
            stack.push(currNum); // 이전 값 넣고,
            currStr = '';
            currNum = 0; // 새로운 값 저장 준비([] 내 [])
        } else if (str[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (!isNaN(str[i])) {
            currNum = `${currNum}${str[i]}`; // 숫자가 문자열 내에서 문자로 쭉 이어져있기 때문에 연결
        } else {
            currStr += str[i];
        }
    }

    return currStr;
}