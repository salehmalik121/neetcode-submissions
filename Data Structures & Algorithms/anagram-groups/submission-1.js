class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let s_hm = new Map();
        for(let s of strs){
            let a = new Array(26).fill(0);
            for(let alpha of s ){
                a[alpha.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = a.join(",")
            let value = s_hm.get(key);
            if(value == undefined){
                s_hm.set(key , [s]);
            }else{
                s_hm.set(key , [...value , s])
            }  
        }

        return [...s_hm.values()]

    }
}
