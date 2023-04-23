/* 
   Language - Javascript
   Date solved - 08/01/2023

 - Problem description
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
   The sum of these multiples is 23.
   Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
   Additionally, if the number is negative, return 0 (for languages that do have them).
   Note: If the number is a multiple of both 3 and 5, only count it once. 

 - Solution 1
 - Time Complexity O(n) where n is the input number
 - Explanation: Check if the number multiplies with 3 and 5, with only three or only five to avoid counting 
   more than once if it multiplies by both
 */

function solution(number){
  let sum = 0;
  for(let i = 0; i < number; i++) {
    if((i % 3 == 0 && i % 5 == 0) ||
       (i % 3 == 0 && i % 5 != 0) || 
       (i % 5 == 0 && i % 3 != 0)) {
      sum += i;
    } 
  }
  return sum;
}
