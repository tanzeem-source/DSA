class Solution {
  find(arr, x) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        first = i;
        break;
      }
    }

    if (first === -1) {
      return [-1, -1];
    }

    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] === x) {
        last = j;
        break;
      }
    }
    return [first, last];
  }
}

//Time complexity : O(n)
//Space complexity : O(1)
