
/* 
   Language - Javascript
   Date solved - 06/01/2023
   
 - Problem description
   Write a function that accepts an array of 10 integers (between 0 and 9), 
   that returns a string of those numbers in the form of a phone number.
   
 - Solution 1
 - Time Complexity O(1)
 - Explanation: Join the numbers array to a string and then use regex to split these
   string by 3, 3 and last 4 digits and join them to form the requested phone number format
 */

function createPhoneNumber(numbers){
  const str = numbers.join('');
  const match = str.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
  return `(${match[1]}) ${match[2]}-${match[3]}`
}
