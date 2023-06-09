/* 
   Language - Javascript
   Date solved - 09/01/2023

 - Problem description
   The goal of this exercise is to convert a string to a new string where each character in the new string
   is "(" if that character appears only once in the original string, or ")" if that character appears more 
   than once in the original string. Ignore capitalization when determining if a character is a duplicate. 

 - Solution 1
 - Time Complexity O(n)
 - Explanation: Iterate and keep count of each character occurrence and then iterate and based
   on character occurrence frequency construct the string with the correct parentheses
 */

function duplicateEncode(word){
    const chars = word.split('');
    const map = new Map();
    for(let char of chars) {
      char = char.toLowerCase();
      map.set(char, map.get(char) ? map.get(char) + 1 : 1);
    }
    let result = '';
    for(let char of chars) {
      char = char.toLowerCase();
      result += map.get(char) > 1 ? ')' : '(';
    }
    return result;
}
