class Solution{
    valEqualToPos(arr){
        let result = [];

        for(let i=0; i<arr.length; i++){
            if (arr[i]=== i+1){
                result.push(i+1);
            }
        }
        return result;
    }
}

//Time complexity : O(n)
//Space complexity : O(n) as we have used an extra array to store result