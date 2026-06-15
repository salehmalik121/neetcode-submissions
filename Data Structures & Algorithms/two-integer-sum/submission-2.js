class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i in nums){
            let remain = target - nums[i];
            if(nums.includes(remain , 0)){
                if(Number(i) != nums.indexOf(remain, 0)){
                    return [Number(i) , nums.indexOf(remain, 0)]
                }
                
            }
        }

    }
}
