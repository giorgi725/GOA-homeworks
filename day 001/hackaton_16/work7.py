# Task 9: Range Sum with for Loop
# Instructions:
#  Use a for loop and range() to compute the sum of numbers from 0 to 7 and store it in result.
# Test Cases:
#  assert result == 28

result = []

for num in range(0,7):
    result.append(num)

print(sum(result))