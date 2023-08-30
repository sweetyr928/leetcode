/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const queue = [];
    let noFreshOranges = 0;
    let time = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) noFreshOranges++;
        }
    }
    
    while (queue.length) {
        const n = queue.length;

        let freshOrngCount = 0;
        for (let i = 0; i < n; i++) {
            const [x, y] = queue.shift();
            // right
            if ((y < grid[x].length - 1) && (grid[x][y + 1] === 1)) {
                freshOrngCount++;
                grid[x][y + 1] = 2
                queue.push([x, y + 1]);
            }
            // bottom
            if ((x < grid.length - 1) && (grid[x + 1][y] === 1)) {
                freshOrngCount++;
                grid[x + 1][y] = 2
                queue.push([x + 1, y]);
            }
            // top
            if ((x >= 1) && (grid[x - 1][y] === 1)) {
                freshOrngCount++;
                grid[x - 1][y] = 2
                queue.push([x - 1, y]);
            }
            // left
            if ((y >= 1) && (grid[x][y - 1] === 1)) {
                freshOrngCount++;
                grid[x][y - 1] = 2
                queue.push([x, y - 1]);
            }
        }
        if (freshOrngCount) time++;
        noFreshOranges -= freshOrngCount;
    }

    return !noFreshOranges ? time : -1;
};