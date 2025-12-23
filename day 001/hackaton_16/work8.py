# Extra 4: Find the Maximum of Two Numbers
# Instructions:
# Write a program max_of_two(a, b) that returns the larger of the two numbers.
# Test Cases:
# assert max_of_two(3, 7) == 7
# assert max_of_two(10, 5) == 10
# assert max_of_two(-2, -5) == -2

def max_of_two(a ,b):
    if a > b:
        return a
    else:
        return b

print(max_of_two(32,45))