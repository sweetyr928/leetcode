/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer = [];
    
    const check = (arr,left) => {
        if(!left.length && arr.length) answer.push(arr);

        for(let i=1;i<=left.length;i++){
            let word = left.slice(0,i);
            if(isPalindrome(word)){
                let newArr = arr.slice();
                newArr.push(word);
                let newLeft = left.slice(i);
                check(newArr,newLeft);
            }
        }
    }

    check([],s);

    return answer;
};

const isPalindrome = (str) => {
    let back = str.split("").reverse().join("");

    if(str === back) return true;
    else false;
}