# 7 kyu

"""https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python"""

#Beginner Series #3 Sum of Numbers

def get_sum(a,b):
    if a == b:
        return a
    res = 0
    for num in range(min(a, b), max(a, b)  + 1):
        res += num
    return res

"""https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/python"""

#Two to One

def longest(a1, a2):
    res = ""
    for ch in a1 + a2:
        if ch not in res:
            res += ch
    return ''.join(sorted(res))

"""https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python"""

#Categorize New Member

def open_or_senior(data):
    res = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            res.append("Senior")
        else:
            res.append("Open")
    return res

"""https://www.codewars.com/kata/52f3149496de55aded000410/train/python"""

#Summing a number's digits

def sum_digits(number):
    total = 0
    for num in str(abs(number)):
        total += int(num)
    return total

# abs uaryofiti ro iyos problema araa

"""https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/python"""

#Find the middle element

def gimme(input_array):
    mid = sorted(input_array)[1]
    return input_array.index(mid)

# 6 kyu

"""https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python"""

#Who likes it?

def likes(names):
    a = len(names)
    
    if a == 0:
        return "no one likes this"
    elif a == 1:
        return f"{names[0]} likes this"
    elif a == 2:
        return f"{names[0]} and {names[1]} like this"
    elif a == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {a-2} others like this"


"""https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python"""

#Find the odd int

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num

"""https://www.codewars.com/kata/523f5d21c841566fde000009/train/python"""

#Array.diff

def array_diff(a, b):
    return [x for x in a if x not in b]

"""https://www.codewars.com/kata/5264d2b162488dc400000001/train/python"""

#Stop gninnipS My sdroW!

def spin_words(sentence):
    words = sentence.split()        
    new_words = []                
    for word in words:              
        if len(word) >= 5:         
            new_words.append(word[::-1])
        else:
            new_words.append(word)    
    return ' '.join(new_words)  

"""https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python"""

#Convert string to camel case

def to_camel_case(text):
    for sep in "-_":
        text = text.replace(sep, " ")
    words = text.split()
    if not words:
        return ""
    return words[0] + ''.join(word.capitalize() for word in words[1:])