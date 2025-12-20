"""https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/python"""

# Reversed Words

def reverse_words(s):
    return " ".join(s.split()[::-1])