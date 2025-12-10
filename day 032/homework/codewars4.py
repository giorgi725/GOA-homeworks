"""https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python"""

# Remove duplicates from list

def distinct(seq):
    seen = set()
    result = []
    for x in seq:
        if x not in seen:
            seen.add(x)
            result.append(x)
    return result