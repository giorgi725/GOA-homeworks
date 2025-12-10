"""https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python"""

# Disemvowel Trolls

def disemvowel(string_):
    vowels="aeiouAEIOU"
    string=""
    for char in  string_:
        if char not in vowels:
            string += char
    return string