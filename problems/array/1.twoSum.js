/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var temp = []
var twoSum = function(nums, target) {
    for(i=0; i<nums.length;i++){
        if(nums[i]>target){
            continue;
        }else if(temp.length ===1 && nums[i]+nums[temp[0]] === target){
            temp.push(i)
        }else {
            temp=[i]
        }
    }
    return temp
};