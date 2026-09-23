// class Solution{
//     majorityElement(nums){
//         let frequency = 0;

//         for(let i=0; i<nums.length; i++){
//             for(let j=0; j<nums.length; j++){
//                 if(nums[i]=== nums[j]){
//                     frequency++;
//                 }
//             }
//             if(frequency > nums.length/2){
//                 return nums[i];
//             }
//             frequency = 0;
//         }
//         return -1;
//     }
// }
//Time Complexity: O(n^2) and Space Complexity: O(1)

//----------------------------------------------------------------

// class Solution{
//     majorityElement(nums){
//         let n = nums.length;

//         nums.sort((a,b)=> a-b);

//         let candidate = Math.floor(n/2);

//         let count = 0;

//         for(let i=0; i<n; i++){
//             if(nums[i] === candidate){
//                 count++;
//             }
//         }

//         if(count > n/2){
//             return candidate;
//         }

//         return -1;
//     }
// }
//using sorting and counting the frequency of the candidate

//Time Complexity: O(nlogn) and Space Complexity: O(1)

//----------------------------------------------------------------
class Solution{
    majorityElement(nums){
        const counts = {};
        const threshold = Math.floor(nums.length / 2);

        for (let num of nums){
            counts[num] = (counts[num] || 0) + 1;
            if(counts[num] > threshold){
                return num;
            }
        }

        return -1;
    }
}

// using hashmap frequency count 
// Time Complexity: O(n) and Space Complexity: O(n)

//----------------------------------------------------------------



