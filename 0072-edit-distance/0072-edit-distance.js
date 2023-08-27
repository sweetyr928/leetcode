/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    // 최소값 비교하려면 요소의 위, 왼쪽, 왼쪽 위 대각선 값 필요하므로 m+1 x n+1 매트릭스 만듦
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0)); 
    
    // 첫 번째 열, 행은 전부 i(문자열 길이)번 바꿔야함
    // h와 "", ho와 "" 비교...
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                // 값을 바꾸거나, 값을 삭제하거나, 값을 더하거나
                // +1 하는 이유 : 위 행위 중 하나를 했으므로 횟수에 1 더해주기
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            }
        }
    }
    
    return dp[m][n]; // 최종값은 가장 마지막 행, 열이 되는 요소에
};