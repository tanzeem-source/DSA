class Solution{
    minmax(arr){
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;

        for(let i = 0; i< arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }

            if(arr[i] > max){
                max = arr[i];
            }
        }

        return [min, max];
    }
}

//Time complexity : O(n)
//Space complexity : O(1)