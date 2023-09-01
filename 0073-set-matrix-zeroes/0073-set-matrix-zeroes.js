/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let queue = [];

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(!matrix[i][j]) queue.push([i,j]);
        }
    }

    while(queue.length){
        let cur = queue.shift();

        for(let i=0;i<matrix[0].length;i++){
            if(matrix[cur[0]][i])
                matrix[cur[0]][i] = 0;
        }

        for(let i=0;i<matrix.length;i++){
            if(matrix[i][cur[1]])
                matrix[i][cur[1]] = 0;
        }
    }
};