
# Language - Javascript
# Date solved - 10/01/2023

# - Problem description
#   In this kata you will create a function that takes a list of non-negative integers 
#   and strings and returns a new list with the strings filtered out. 

# - Solution 1
# - Time Complexity O(n)
# - Explanation: Check the type of each element and filter out those of type string

function filter_list(l) {
  return l.filter(x => typeof x !== 'string');
}
