/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1;
    let zero = 0;

    for (let num of nums) {
        num === 0 ? zero++ : product *= num;
        if (zero > 1) {
            return new Array(nums.length).fill(0)
        }
    }

    for (let i in nums) {
        if (!zero) {
            nums[i] = product / nums[i]
        }else if (nums[i] !== 0 && zero) {
            nums[i] = 0
        }else if(nums[i] === 0 && zero){
            nums[i] = product
        }
    }
    
    return nums
};