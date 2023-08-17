/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer = 0;

    if(nums.includes(target)) answer = nums.indexOf(target);
    else{
        for(let i=0;i<nums.length;i++){
            if(nums[i] < target && nums[i+1] > target){
                answer = i+1;
                break;
            }
        }
        if(!answer){
            answer =  nums[0] > target ? answer : nums.length;
        }
    }

    return answer;
};