class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
        let s_hm = new Map();
        let t_hm = new Map();
        if(s.length != t.length){
            return false;
        }

        for(let i = 0 ; i< s.length ; i++){
            s_hm.set(s[i] , s_hm.get(s[i])? s_hm.get(s[i]) +1 : 1  )
            t_hm.set(t[i] , t_hm.get(t[i])? t_hm.get(t[i]) +1 : 1  )
        }

        for(let [key, value] of s_hm){
            console.log(key)
            if(s_hm.get(key) != t_hm.get(key)){
                return false
            }
        }

        return true
        

    }
}
