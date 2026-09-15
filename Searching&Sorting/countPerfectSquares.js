//Given a positive integer n, find the number of perfect squares that are less than n in the sample space of perfect squares. The sample space consists of all perfect squares starting from 1 (i.e., 1, 4, 9, 16, 25, …)

class Solution{
    countSquares(n){
        let count =0;
        for(let i=1; i*i<n; i++){
            if(i*i<n){
                count++;
            }
        }
        return count;
    }
}

//Time complexity : O(sqrt(n))
//Space complexity : O(1) as we have not used any extra space

