//Given an array, arr[] and an integer x, return true if there exists a pair of elements in the array whose absolute difference is x, otherwise, return false.

// class Solution{
//     pairWithDifference(arr, x){
//         for(let i=0; i<arr.length; i++){
//             for(let j=i+1; j<arr.length; j++){
//                 if(Math.abs(arr[i]- arr[j])===x){
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
// }

//Time Complexity: O(n^2) and Space Complexity: O(1)

//------------------------------------------------------------------

class Solution{
    pairWithDifference(arr,x){
        const seen = new Set();
        const target = Math.abs(x);

        for(let i=0; i<arr.length; i++){
            if(seen.has(arr[i]+target) || seen.has(arr[i]-target)){
                return true;
            }
            seen.add(arr[i]);
        }
        return false;
    }
}

//Time Complexity: O(n) and Space Complexity: O(n) as we are using a set to store the elements of the array.