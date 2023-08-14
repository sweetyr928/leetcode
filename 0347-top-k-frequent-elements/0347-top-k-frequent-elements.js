/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const answer = [];
    const map = new Map();

    for(let n of nums){
        map.set(n,(map.get(n) || 0) + 1);
    }

    const arr = [...map].sort((a,b) => b[1]-a[1]);
    
    for(let i=0;i<k;i++){
        answer.push(arr[i][0]);
    }
     
    return answer;
};