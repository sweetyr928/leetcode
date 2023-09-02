/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < s.length; i++) {
        sArr.push(s.indexOf(s[i]));
        tArr.push(t.indexOf(t[i]));
        if (sArr[i] != tArr[i]) return false;
    }
    
  return true;
};