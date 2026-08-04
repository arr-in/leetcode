/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0;
    let maxlen = 0;
    let map = new Map();
    for (let r = 0; r < fruits.length; r++) {
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);
        while (map.size > 2) {
            map.set(fruits[l], map.get(fruits[l]) - 1);
            if (map.get(fruits[l]) === 0) {
                map.delete(fruits[l]);
            }
            l++;
        }
        maxlen = Math.max(maxlen, r - l + 1);
    }
    return maxlen;
};