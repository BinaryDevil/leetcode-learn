/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sets = {}
    for(const str of strs){
        const unordered = str.split("").sort().join("")
        if(sets[unordered]){
            sets[unordered].push(str)
        }else{
            sets[unordered]=[str]
        }
    }
    return Object.values(sets)
};