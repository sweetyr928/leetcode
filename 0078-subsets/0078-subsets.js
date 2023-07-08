/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = [];

    const dfs = (fixed, left) => {
        if(!answer.includes(fixed)) answer.push(fixed);
        for(let i=0;i<left.length;i++){
              if(!fixed.length || left[i] > fixed[fixed.length-1]){
                let newFixed = [...fixed,left[i]];
                let newLeft = left.slice();
                newLeft.splice(i,1);
                dfs(newFixed,newLeft);
              } 
          }
    }

    dfs([],nums);

    return answer.sort((a,b) => a.length-b.length);
};