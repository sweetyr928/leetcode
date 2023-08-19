/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    // hour 안에 도착할 수 있는지 여부 판단
    function canReachOnTime(speed) {
        // 무조건 한 기차역에서 정수단위로 시간 보내고 다음 기차역으로 넘어가야하므로
        // 마지막 역 제외하고는 전부 Math.ceil 처리
        let total_time = dist.slice(0, -1)
        .reduce((acc, d) => acc + Math.ceil(d / speed), 0) + dist[dist.length - 1] / speed;

        return total_time <= hour;
    }

    let left = 1, right = 10 ** 7;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canReachOnTime(mid)) { // 속도의 최소값을 반환해야하므로 더 작은 값 찾아보기
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (canReachOnTime(left)) {
        return left; // 최소값을 반환해야하기 떄문에 left 리턴
    } else {
        return -1;
    }    
};