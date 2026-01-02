"""https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python"""

#Exes and Ohs

def xo(s):
    s = s.lower()  # Make it case-insensitive
    return s.count('x') == s.count('o')