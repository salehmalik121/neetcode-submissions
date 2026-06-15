class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i in nums){
            let remain = target - nums[i];
            let index = nums.indexOf(remain, 0 )
            if(index != -1 && index != i){
                return [Number(i) , index]
            }
        }

    }
}
