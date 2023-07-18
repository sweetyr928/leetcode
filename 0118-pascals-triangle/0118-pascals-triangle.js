/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = Array.from({length:numRows},(_,idx) => new Array(idx+1).fill(1));
    
    for(let i=0;i<answer.length;i++){
        for(let j=0;j<i;j++){
            if(answer[i-1][j-1] && answer[i-1][j]){
                answer[i][j] = answer[i-1][j-1] + answer[i-1][j];
            }
        }
    }

    return answer;
};