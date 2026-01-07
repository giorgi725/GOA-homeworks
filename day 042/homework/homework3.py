#4) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით
nums = list(range(1, 21))
list_new=[]
for num in nums:
    list_new.append(num**2)
print(list_new)

squares=[num**2 for num in nums ]
print(squares)