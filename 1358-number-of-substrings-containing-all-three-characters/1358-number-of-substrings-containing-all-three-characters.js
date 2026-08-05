/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let map = new Map();
    let left = 0;
    let count = 0;
    for(let right = 0 ; right < s.length ; right++){
        map.set(s[right] , (map.get(s[right]) || 0 ) + 1);
        while(map.size === 3){
            count = count + s.length - right;
            map.set(s[left] , map.get(s[left]) - 1);
            if(map.get(s[left]) <= 0){
                map.delete(s[left]);
            }
            left++;
        }
    }
    return count;
};