#8kyu

"""https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python"""
#Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name[0].lower() == 'r':
        return name + " plays banjo"
    else:
        return name + " does not play banjo"

"""https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python"""
#Calculate average
def find_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

"""https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python"""
#Fake Binary
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result += "0"
        else:
            result += "1"
    return result

"""https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python"""
#Reversed sequence
def reverse_seq(n):
    return list(range(n, 0, -1))

"""https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python"""
#If you can't sleep, just count sheep!!
def count_sheep(n):
    return "".join(f"{i} sheep..." for i in range(1, n + 1))

"""https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python"""
#Remove exclamation marks
def remove_exclamation_marks(s):
    return s.replace('!', '')

"""https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/python"""
#Area or Perimeter
def area_or_perimeter(l , w):
    if l == w:
        return l * w
    else:
        return 2 * (l + w)

#7kyu

"""https://www.codewars.com/kata/56606694ec01347ce800001b/train/python"""
#Is this a triangle?
def is_triangle(a, b, c):
    if a <= 0 or b <= 0 or c <= 0:
        return False
    return a + b > c and a + c > b and b + c > a

"""https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python"""
#Find the next perfect square!
import math

def find_next_square(sq):
    root = math.isqrt(sq) 
    if root * root != sq:
        return -1 
    return (root + 1) ** 2

"""https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/python"""
#Ones and Zeros
def binary_array_to_number(arr):
    result = 0
    for bit in arr:
        result = result * 2 + bit
    return result

"""https://www.codewars.com/kata/5949481f86420f59480000e7/train/python"""
#Odd or Even?
def odd_or_even(arr):
    total = sum(arr) 
    if total % 2 == 0:
        return "even"
    else:
        return "odd"

# 6kyu

"""https://www.codewars.com/kata/514b92a657cdc65150000006/train/python"""
#Multiples of 3 or 5
def solution(number):
    if number < 0:
        return 0
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)