/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];

    const phone = {
        2 : ["a","b","c"],
        3 : ["d","e","f"],
        4 : ["g","h","i"],
        5 : ["j","k","l"],
        6 : ["m","n","o"],
        7 : ["p","q","r","s"],
        8 : ["t","u","v"],
        9 : ["w","x","y","z"]
    }

    let answer = [];

    const combination = (str,idx) => {
        if(str.length === digits.length){
            answer.push(str);
        } 
        else{
            for(const letter of phone[digits[idx]]){
                combination(str+letter,idx+1);
            }
        }
    }

    combination("",0);

    return answer;
};