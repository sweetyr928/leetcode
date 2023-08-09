/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arrS = s.split('');
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let low = 0;
    let hi = s.length -1;

    while (low < hi) {
        if (!vowels.includes(arrS[low]) && !vowels.includes(arrS[hi])) {
            low++;
            hi--;
        }else if (vowels.includes(arrS[low]) && !vowels.includes(arrS[hi])) {
            hi--;
        } else if (!vowels.includes(arrS[low]) && vowels.includes(arrS[hi])) {
            low++;
        } else if (vowels.includes(arrS[low]) && vowels.includes(arrS[hi])) {
            let temp = arrS[low];
            arrS[low] = arrS[hi];
            arrS[hi] = temp;
            low++;
            hi--;
        }
    }

    return arrS.join('');
};