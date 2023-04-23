/* 
   Language - Javascript
   Date solved - 09/01/2023
   
 - Problem description
   Given an integral number, determine if it's a square number:. 
   
 - Solution 1
 - Time Complexity O(1)
 - Explanation: Calculate the square root of the number and check if its an integer
 */

const isSquare = (n) => {
  return Number.isInteger(Math.sqrt(n))
}
