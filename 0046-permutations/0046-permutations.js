/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [];

    const dfs = (fixed,left) => {
        if(fixed.length === nums.length) answer.push(fixed);
        else{
            for(let i=0;i<left.length;i++){
                let newFixed = fixed.slice();
                newFixed = [...fixed,left[i]];
                let newLeft = left.slice();
                newLeft.splice(i,1);
                if(!answer.includes(newFixed)) dfs(newFixed,newLeft);
            }
        }
    }

    dfs([],nums);

    return answer;
};