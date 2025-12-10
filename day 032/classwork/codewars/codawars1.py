""""https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python"""

# Vowel Count

def get_count(sentence):
    wovels = "aeiou"
    count = 0
    for char in sentence:
        if char in wovels:
            count+=1
            
    return count