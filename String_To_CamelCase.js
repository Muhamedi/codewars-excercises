/* 
   Language - Javascript
   Date solved - 07/01/2023

 - Problem description
   Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
   The first word within the output should be capitalized only if the original word was capitalized 
   (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized. 

 - Solution 1
 - Time Complexity O(n) where n is the length of the input string
 - Explanation: Split the string by underscore or dash, then loop through each word
   Convert to uppercase the first character of all words except the first so 
   that it can keep the original first letter casing as required by the problem
   Save the transformed words back and join them
 */

function toCamelCase(str){
  if(!str) {
    return str;
  }
  const splitedStr = str.split(/[-_]/);
  for(let i = 0; i < splitedStr.length; i++) {
     const splitedWord = splitedStr[i].split('');
     if(i > 0) {
        splitedWord[0] = splitedWord[0].toUpperCase();
     }
     const word = splitedWord.join('');
     splitedStr[i] = word;
  }
  return splitedStr.join('');
}
