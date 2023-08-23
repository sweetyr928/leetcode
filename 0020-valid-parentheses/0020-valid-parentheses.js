/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2) return false;

    let stack = [];

    for(let i=0;i<s.length;i++){
        if(s[i]==="(" || s[i]==="[" || s[i]==="{") stack.push(s[i]);
        else if(s[i]==="}"){
            if(stack[stack.length-1] === "{") stack.pop();
            else return false;
        }
        else if(s[i]==="]"){
            if(stack[stack.length-1] === "[") stack.pop();
            else return false;
        }
        else if(s[i]===")"){
            if(stack[stack.length-1] === "(") stack.pop();
            else return false;
        }
    }
    
    return stack.length ? false : true;
};