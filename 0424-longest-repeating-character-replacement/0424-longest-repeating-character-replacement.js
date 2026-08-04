/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxlen = 0;
    let maxfreq = 0;
    let map = new Map();
    for(let right = 0 ; right < s.length ; right++){
        map.set(s[right] , (map.get(s[right]) || 0 )+1);
        maxfreq = Math.max(maxfreq, map.get(s[right]));
        while( (right-left+1) - maxfreq > k ){
            map.set(s[left] , map.get(s[left]) - 1);
            left++;
        }
        maxlen = Math.max(maxlen , right-left+1)
    }
    return maxlen;
};