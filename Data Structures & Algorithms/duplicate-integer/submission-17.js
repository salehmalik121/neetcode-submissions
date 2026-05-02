class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);
        if(duplicates.length >= 1){
            return true;
        }else{
            return false;
        }
    }
}
