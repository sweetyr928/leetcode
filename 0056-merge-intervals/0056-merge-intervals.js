/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let stack = [];
    intervals.sort((a,b) => a[0] - b[0]);
    let newIntervals = intervals.slice();
    stack.push(newIntervals.shift());

    for(let i=1;i<intervals.length;i++){
        let temp = stack.pop();
        let cur = newIntervals.shift();
        if(temp[0] <= cur[0] && temp[1] >= cur[0]) stack.push([temp[0],Math.max(temp[1],cur[1])]);
        else{
            stack.push(temp);
            stack.push(cur);
        }
    }

    return stack;
};