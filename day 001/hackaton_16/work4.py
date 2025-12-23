# Task 7: Check Even or Odd
# Instructions:
# write code that returns True if number is even, otherwise False.
# Test Cases:
# assert is_even(4) == True
# assert is_even(7) == False
# assert is_even(0) == True

num1 = int(input("Enter number: "))

if num1 % 2 == 0:
    print(True)
else:
    print(False)