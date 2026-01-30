# 8 kyu

"""https://www.codewars.com/kata/57f780909f7e8e3183000078/train/python"""

#Beginner - Reduce but Grow

def grow(arr):
    res = 1
    for num in arr:
        res *= num
    return res

"""https://www.codewars.com/kata/5861d28f124b35723e00005e/train/python"""

#Will you make it?

def zero_fuel(dist, mpg, fuel_left):
    if mpg * fuel_left >= dist:
        return True
    else:
        return False
        

"""https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/python"""

#Sum without highest and lowest number

def sum_array(arr):
    if arr is None or len(arr) < 3:
        return 0
    return sum(arr) - min(arr) - max(arr)

"""https://www.codewars.com/kata/56b1f01c247c01db92000076/train/python"""

#Double Char

def double_char(s):
    res = ''
    for char in s:
        res += char * 2
        
    return res

"""https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/python"""

#Array plus array

def array_plus_array(arr1,arr2):

    res1 = sum(arr1)
    res2 = sum(arr2)
    
    result = res1 + res2
    
    return result

"""https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/python"""

#Is it even?

def is_even(n): 
    
    if n % 2 == 0:
        return True
    else:
        return False

#7kyu

"""https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python"""

#Credit Card Mask

def maskify(c):
    return "#" * (len(c) - 4) + c[-4:]

"""https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python"""

#Number of People in the Bus

def number(bus_stops):
    people = 0
    for on, off in bus_stops:
        people += on 
        people -= off 
    return people

"""https://www.codewars.com/kata/559590633066759614000063/train/python"""

#The highest profit wins!

def min_max(lst):
    for num in lst:
        if len(lst) < 2:
            return [num, num]
    return [min(lst),max(lst)]

"""https://www.codewars.com/kata/539ee3b6757843632d00026b/train/python"""

#Find the capitals

def capitals(word):
    result = []
    for char in range(len(word)):
        if word[char].isupper():
            result.append(char)
    return result

"""https://www.codewars.com/kata/526c7363236867513f0005ca/train/python"""

#Leap Years

def is_leap_year(year):
    if year % 400 == 0:
        return True

    if year % 100 == 0:
        return False

    if year % 4 == 0:
        return True

    return False

"""https://www.codewars.com/kata/5680781b6b7c2be860000036/train/python"""

#Find the vowels

def vowel_indices(word):
    word = word.lower()
    vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    res = []
    index = 1
    for char in word:
        if char in vowels:
            res.append(index)
        index += 1
    return res

#6kyu

"""https://www.codewars.com/kata/541c8630095125aba6000c00/train/python"""

#Sum of Digits / Digital Root

def digital_root(n):
    if n < 10:
        return n
    return digital_root(sum(int(d) for d in str(n)))

"""https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python"""

#Take a Ten Minutes Walk

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    else:
        return (walk.count("n") == walk.count("s") and walk.count("e") == walk.count("w"))

"""https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python"""

#Detect Pangram
#
def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    for char in alphabet:
        if char not in st:
            return False
    return True