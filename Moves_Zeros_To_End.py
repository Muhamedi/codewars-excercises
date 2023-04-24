""" 
   Language - Python
   Date solved - 05/01/2023

 - Problem description
   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

 - Solution 1
 - Time Complexity O(n^2) where n is the length of the input
 - Explanation: Copy the list and then when loop through the input. If the element is 0 then remove it and save it 
   to the zeros list. Then append the zeros at the end and return the result.
"""

def move_zeros(lst):
    list = lst.copy()
    zeros = [];
    for elem in lst:
        if(elem == 0):
            list.remove(elem)
            zeros.append(elem)
    list.extend(zeros);
    return list
