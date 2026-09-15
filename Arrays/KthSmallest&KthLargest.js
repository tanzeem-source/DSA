//Given an integer array arr[] and an integer k, find and return the kth smallest element in the given array.

class Solution{
    kthSmallest(arr, k){
        arr.sort((a,b)=> a-b);  //sorts the array in ascending order
        return arr[k-1];
    }

    kthLargest(arr,k){
        arr.sort((a,b)=> b-a); //sorts the array in descending order
        return arr[k-1];
    }
}

//Time complexity : O(nlogn) as we have sorted the array
//Space complexity : O(1) as we have not used any extra space

