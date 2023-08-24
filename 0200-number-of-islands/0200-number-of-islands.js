/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let count = 0;
	
	const isIsland = (i, j) => {
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
			return;
		}
		
		grid[i][j] = "0"; // 연결된 요소들을 전부 0 처리(for 문 내 if 문에서 걸려 탐색되지 않도록)
		
		isIsland(i + 1, j); 
		isIsland(i - 1, j); 
		isIsland(i, j + 1); 
		isIsland(i, j - 1); 
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === "1") {
				count += 1;
				isIsland(i, j);
			}
		}
	}
	
	return count;
};