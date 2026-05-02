class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        let hasDuplicate = false;
        nums.forEach(num=>{
            if(set.has(num)){
                hasDuplicate = true;
            }
            set.add(num);
        })
        return hasDuplicate;
    }
}
