//Given three distinct numbers a, b and c. Find the number with a value in the middle (Try to do it with minimum comparisons).

class Solution{
    findMiddle(a,b,c){
        let middle = a;

        if((b>middle && b<c) || (b<middle && b>c)){
            middle = b;
        }
        else if((c>middle && c<b) || (c<middle && c>b)){
            middle = c;
        }

        return middle;
    }
}

//Time complexity : O(1) as we have used constant time
//Space complexity : O(1) as we have not used any extra space