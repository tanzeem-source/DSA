class Solution {
  reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }

    return arr;
  }
}

//Time complexity : O(n)
//Space complexity : O(1)


