# 10) შექმენით პროგრამა რომელიც ბეჭდავს 5 შემთხვევით რიცხვს 1 დან 50 მდე გამოიყენეთ random.randint და მიღებული რიცხვებიდან იპოვეთ მინიმუმი და მაქსიმუმი min max

import random

numbers = []
for _ in range(5):
    num = random.randint(1, 50)
    numbers.append(num)

print(numbers)

print(min(numbers))
print(max(numbers))

