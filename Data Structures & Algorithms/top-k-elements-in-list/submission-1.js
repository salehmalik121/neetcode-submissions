class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n_hm = new Map();

        for(let n of nums  ){
            if(!n_hm.get(n)){
                n_hm.set(n,1);
            }else{
                n_hm.set(n, n_hm.get(n)+1);
            }
        }

        let arr = [...n_hm].sort((a,b)=>b[1]-a[1]).slice(0,k).map(([first]) => first )
        return arr;
    }
}
