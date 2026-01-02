"""https://www.codewars.com/kata/56747fd5cb988479af000028/train/python"""

#Get the Middle Character

def get_middle(s):
    length = len(s)
    middle = length // 2
    if length % 2 == 0:
        return s[middle-1:middle+1]
    else:
        return s[middle]