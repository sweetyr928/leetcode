/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = 0;
    let left = new Array(height.length).fill(0);
    for(let i = 0; i < height.length; i++) { 
        if(maxLeft < height[i]) {
            maxLeft = height[i];
        }
        left[i] = maxLeft;
    }
        
    let maxRight = 0;
    let right = new Array(height.length).fill(0);
    for(let i = height.length-1; i >= 0; i--){
        if(maxRight < height[i]) {
            maxRight = height[i];
        }
        right[i] = maxRight;
    }
        
    let trap = 0;
    for(let i = 0; i < height.length; i++) {
        trap += Math.min(left[i], right[i]) - height[i];
    }

    return trap;        
};