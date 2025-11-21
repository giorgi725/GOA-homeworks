# 12) შექმენით პროგრამა რომელიც აგენერირებს შემთხვევითი რიცხვების სიას 5 ელემენტით გამოიყენეთ random.randint და ბოლოს დაითვალეთ ამ სიის სიგრძე და ჯამი len sum

import random

numbers = []
for _ in range(5):
    numbers.append(random.randint(1, 100))

print(numbers)

print(len(numbers))
print(sum(numbers))