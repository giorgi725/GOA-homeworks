"""https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python"""

# Indexed capitalization

def capitalize(s, ind):
    result = list(s)  
    for i in ind:
        if 0 <= i < len(s):  
            result[i] = result[i].upper()
    return "".join(result)
