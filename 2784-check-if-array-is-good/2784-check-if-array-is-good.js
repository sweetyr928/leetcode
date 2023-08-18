/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b);
    
    if(sortedNums[sortedNums.length-1] !== sortedNums[sortedNums.length-2]) return false;

    for(let i=0;i<sortedNums.length-1;i++){
        if(sortedNums[i] !== i + 1) return false;
    }

    return true;
};