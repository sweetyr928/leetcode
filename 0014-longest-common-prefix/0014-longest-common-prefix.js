/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";
    let lengthOfStrs = strs.map((el) => el.length)
    let shortestStr = lengthOfStrs.indexOf(Math.min(...lengthOfStrs));

    for(let i=0;i<strs[shortestStr].length;i++){
        let allSame = true;
        for(let j=0;j<strs.length;j++){
            if(strs[j][i] !== strs[shortestStr][i]){
                allSame = false;
                break;
            }
        }
        if(allSame) common += strs[shortestStr][i];
        else break;
    }

    return common;
};