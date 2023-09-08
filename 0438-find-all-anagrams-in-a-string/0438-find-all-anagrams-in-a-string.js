const findAnagrams = (s, p) => {
    const answer = [];
    const map = new Map();
    
    for (let char of p) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    let l = 0;
    let r = 0; 
    let count = p.length;
    
    while (r < s.length) {
        if (map.get(s[r]) > 0) count--;
        map.set(s[r], map.get(s[r]) - 1);
        r++;

        if (count === 0) answer.push(l);
        
        if (r - l === p.length) {
            if (map.get(s[l]) >= 0) count++;
            map.set(s[l], map.get(s[l]) + 1);
            l++;
        }
    }

    return answer;
};