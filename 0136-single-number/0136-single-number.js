/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    
    for(let [k,v] of map){
        if(v === 1) return k;
    }
};