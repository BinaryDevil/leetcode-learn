// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestCount = 0
    let seen = new Set()
    let left = 0
    
    for(let right = 0; right<s.length;right++){
        while(seen.has(s[right])){
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right])
        longestCount=Math.max(longestCount, right-left+1)
    }

    return longestCount
};