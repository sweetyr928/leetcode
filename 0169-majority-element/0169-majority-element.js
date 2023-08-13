/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();

    for(let n of nums){
        map.set(n, (map.get(n) || 0) + 1);
    }

    for(let [k,v] of map){
        if(v >= nums.length / 2) return k;
    }
};