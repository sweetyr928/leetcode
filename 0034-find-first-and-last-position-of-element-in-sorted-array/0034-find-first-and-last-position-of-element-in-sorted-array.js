var searchRange = function(nums, target) {
    const findStart = (nums, target) => {
        let start = -1;
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            
            if (nums[mid] === target) {
                start = mid;
            }
        }
        
        return start;
    };
    
    const findEnd = (nums, target) => {
        let end = -1;
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            
            if (nums[mid] === target) {
                end = mid;
            }
        }
        
        return end;
    };
    
    const start = findStart(nums, target);
    const end = findEnd(nums, target);
    
    return [start, end];
};
