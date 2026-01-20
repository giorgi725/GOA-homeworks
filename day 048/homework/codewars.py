#8kyu

"""https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python"""

#Rock Paper Scissors!

def rps(p1, p2):
    if p1 == p2:
        return "Draw!"

    if (p1 == "rock" and p2 == "scissors") or \
        (p1 == "scissors" and p2 == "paper") or \
        (p1 == "paper" and p2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"

"""https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python"""

#Grasshopper - Grade book

def get_grade(s1, s2, s3):
    score = (s1 + s2 + s3) / 3
    if 90<=score<=100:
        return "A"
    elif 80<=score<=90:
        return "B"
    elif 70<=score<=80:
        return "C"
    elif 60<=score<=70:
        return "D"
    else:
        return "F"

"""https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python"""

#Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    positives = 0
    negatives_sum = 0

    for num in arr:
        if num > 0:
            positives += 1
        elif num < 0:
            negatives_sum += num

    return [positives, negatives_sum]

"""https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python"""

#Basic Mathematical Operations

def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 +value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    elif operator == "/":
        return value1/value2

"""https://www.codewars.com/kata/583710ccaa6717322c000105/train/python"""

#Simple multiplication

def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9

"""https://www.codewars.com/kata/57a4d500e298a7952100035d/train/python"""

#Hex to Decimal

def hex_to_dec(s):
    return int(s,16)


#7kyu

"""https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python"""

#Reverse words

def reverse_words(text):
    return " ".join(word[::-1] for word in text.split(" "))

"""https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python"""

#Remove the minimum

def remove_smallest(numbers):
    if not numbers:
        return []

    small = min(numbers)
    removed = False
    result = []

    for num in numbers:
        if num == small and not removed:
            removed = True
            continue
        result.append(num)

    return result

"""https://www.codewars.com/kata/57f609022f4d534f05000024/train/python"""

#Find the stray number

def stray(arr):
    for num in arr:
        if arr.count(num) == 1:
            return num

"""https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python"""

#Anagram Detection

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())

"""https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/python"""

#Factorial

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

"""https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/python"""

#Sum of angles

def angle(n):
    return (n - 2) * 180

#6kyu

"""https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python"""

#Replace With Alphabet Positio

def alphabet_position(text):
    result = []
    for ch in text.lower():       
        if ch.isalpha():           
            position = ord(ch) - ord('a') + 1
            result.append(str(position))
    return " ".join(result)  

"""https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python"""

#Build Tower

def tower_builder(n_floors):
    tower = []
    width = n_floors * 2 - 1  
    
    for i in range(1, n_floors + 1):
        stars = '*' * (2 * i - 1)      
        spaces = (width - len(stars)) // 2
        tower.append(' ' * spaces + stars + ' ' * spaces)
    
    return tower