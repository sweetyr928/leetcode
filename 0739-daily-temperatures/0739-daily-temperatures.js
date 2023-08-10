/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = [];

    for(let i=0;i<temperatures.length;i++){
        let wait = 0;
        for(let j=i;j<temperatures.length;j++){
            if(temperatures[i] < temperatures[j]){
                answer[i] = wait;
                wait = 0;
                break;
            }
            else wait += 1;
        }
        if(wait) answer[i] = 0;
    }

    return answer;
};