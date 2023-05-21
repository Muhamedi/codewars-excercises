""" 
   Language - Python
   Date solved - 21/05/2023

 - Problem description (https://www.codewars.com/kata/550554fd08b86f84fe000a58)
   Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

 - Solution 
 - Time Complexity is O(n^2), where n is the total number of elements across both arrays
 - Explanation: Iterate through both arrays and check if the elements of the first array
   are substrings of second array and add them to the result list if not added before
"""
def in_array(array1, array2):
    result = []
    for item1 in array1:
        for item2 in array2:
            if item1 in item2 and not item1 in result:
                result.append(item1)
    return sorted(result)
