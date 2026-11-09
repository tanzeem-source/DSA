//Given two strings s1 and s2, of equal lengths. The task is to check if s2 is a rotated version of the string s1.

// class Solution{
//     checkRotatedString = function(s1, s2){
//         if(s1.length !== s2.length){
//             return false;
//         }
//         if(s1 === s2){
//             return true;
//         }
//         let n = s1.length;
//         for(let i=0; i<n; i++){
//             let rotated = s1.slice(i) + s1.slice(0,i);
//             if(rotated === s2){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//BRUTE FORCE APPROACH

//Time Complexity: O(n^2) and Space Complexity: O(n) as we are creating a new string for each rotation.

class Solution{
    checkRotatedString = function(s1, s2){
        if(s1.length !== s2.length || s1.length === 0){
            return false;
        }
      return(s1+s1).includes(s2);
    }
}

//Time Complexity: O(n) and Space Complexity: O(n) as we are creating a new string by concatenating s1 with itself.

