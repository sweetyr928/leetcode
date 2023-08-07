/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

var combinationSum = function(candidates, target) {
    let answer = [];

    const check = (candidate, sum) => {
        if(sum === target){
            let same = answer.filter ((el) => arraysAreEqual(el,candidate));
            if(!same.length) answer.push(candidate);
        } 
        else{
            for(let i=0;i<candidates.length;i++){
                let newCandidate = candidate.slice();
                newCandidate.push(candidates[i]);
                let newSum = sum + candidates[i];
                if(newSum <= target) check(newCandidate.sort(),newSum);
            }
        }

    }

    check([],0);

    return answer;
};

