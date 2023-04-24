

def move_zeros(lst):
    list = lst.copy()
    zeros = [];
    for elem in lst:
        if(elem == 0):
            list.remove(elem)
            zeros.append(elem)
    list.extend(zeros);
    return list
