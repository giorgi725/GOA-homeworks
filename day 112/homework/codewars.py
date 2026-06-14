# 7kyu

# https://www.codewars.com/kata/5701e43f86306a615c001868/train/python

# Credit card issuer checking
def get_issuer(number):
    number = str(number)
    if len(number) == 15 and (number.startswith("34") or number.startswith("37")):
        return "AMEX"
    elif len(number) == 16 and number.startswith("6011"):
        return "Discover"
    elif len(number) == 16 and number[:2] in ["51", "52", "53", "54", "55"]:
        return "Mastercard"
    elif (len(number) == 13 or len(number) == 16) and number.startswith("4"):
        return "VISA"
    return "Unknown"

# https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/python

# Counting in the Amazon

def count_arara(n):
    result = ["adak"] * (n // 2)
    if n % 2:
        result.append("anane")
    return " ".join(result)

# https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/python

# Unscrambled eggs

def unscramble_eggs(word):
    return word.replace("egg", "")

# https://www.codewars.com/kata/55afed09237df73343000042/train/python

# lucky number

def is_lucky(n):
    total = sum(int(digit) for digit in str(n))
    return total % 9 == 0

# https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/python

# Make acronym

def to_acronym(inp):
    words = inp.split()
    result = ""
    for word in words:
        result += word[0].upper()
    return result

# https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python

# GCD sum

from math import gcd

def solve(s, g):
    if s % g == 0 and gcd(g, s - g) == g:
        return (g, s - g)
    return -1

# https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/python

# Excel sheet column numbers

def title_to_number(title):
    result = 0
    for char in title:
        result = result * 26 + (ord(char) - ord('A') + 1)
    return result


# 6kyu

# https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/python

# Throwing Darts

def score_throws(radii):
    if not radii:
        return 0
    score = 0
    for r in radii:
        if r < 5:
            score += 10
        elif r <= 10:
            score += 5
    if all(r < 5 for r in radii):
        score += 100
    return score

# https://www.codewars.com/kata/5682e809386707366d000024/train/python

# PatternCraft - Strategy



# https://www.codewars.com/kata/5682e72eb7354b2f39000021/train/python

# PatternCraft - State


