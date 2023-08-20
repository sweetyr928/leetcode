/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();

    for(let n of nums){
        if(map.get(n)) return n;
        else map.set(n,1);
    }
};