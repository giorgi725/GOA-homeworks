# 9) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით

nums = list(range(1, 21))

squares = []
for n in nums:
    squares.append(n ** 2)

print(squares)

squares = [n ** 2 for n in nums]
print(squares)