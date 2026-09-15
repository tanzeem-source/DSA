//Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
//Note: You need to solve this problem without utilizing the built-in sort function.

class Solution{
    sort012(arr){
        let a=0, b=0, c=0;

        for(let i=0; i<arr.length; i++){
            if(arr[i]===0){
                a++;
            }
            else if(arr[i]===1){
                b++;
            }
            else{
                c++;
            }
        }

        let k=0;

        for(let i=0; i<a; i++){
            arr[k++]=0;
        }
        for(let i=0; i<b; i++){
            arr[k++]=1;
        }
        for(let i=0; i<c; i++){
            arr[k++]=2;
        }
        return arr;
    }
}

//Time complexity : O(n) as we have traversed the array twice
//Space complexity : O(1) as we have not used any extra space