# https://www.codewars.com/kata/55685cd7ad70877c23000102/train/python

def make_negative( number ):
    return -abs(number)

# https://www.codewars.com/kata/56dec885c54a926dcd001095/train/python

def opposite(number):
    return -number

# https://www.codewars.com/kata/53369039d7ab3ac506000467/train/python

def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"

# https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python

def positive_sum(arr):
    total = 0
    for n in arr:
        if n > 0:
            total += n
    return total

# https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

def repeat_str(repeat, string):
    return string * repeat

# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    result = ""
    num = str(num)
    for i in num:
        result += str(int(i) ** 2)
        
    return int(result)