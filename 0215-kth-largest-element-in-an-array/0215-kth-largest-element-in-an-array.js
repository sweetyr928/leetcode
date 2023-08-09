/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sortedNums = nums.sort((a,b) => b-a);

    return sortedNums[k-1];
};