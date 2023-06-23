""" 
   Language - Python
   Date solved - 23/06/2023

 - Problem description
   Write a function that takes a string of braces, and determines if the order of the braces is valid. 
   It should return true if the string is valid, and false if it's invalid.

 - Solution 
 - Time Complexity O(n) where n is the length of the input
 - Explanation: Check for opening braces and add the to the stack.
   If any of the starting char is a closing bracket it means the stack is empty so return false.
   If a closing matching bracket is found pop the matching bracket until is empty which means it is valid or the opposite otherwise.
"""

def valid_braces(string):
  stack = []
  for str in string:
    if str in ['(','[','{']:
        stack.append(str)
    elif len(stack) == 0:
        return False
    elif str == ')' and stack[-1] == '(':
        stack.pop()
    elif str == ']' and stack[-1] == '[':
        stack.pop()
    elif str == '}' and stack[-1] == '{':
        stack.pop()
  return len(stack) == 0
