/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1, hi = Math.max(...piles);

    while(low < hi){
        let mid = Math.floor((low+hi)/2);
        let sum = piles.reduce((acc,cur) => acc += Math.ceil(cur/mid),0);

        if(sum <= h){
            hi = mid;
        }else{
            low = mid + 1;
        }
    }

    return low;
};