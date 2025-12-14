# 10) შექმენით set სახელად numbers, დაამატეთ მას ორი რიცხვი add() მეთოდით და წაშალეთ ორი ელემენტი remove() მეთოდით. შემდეგ შექმენით მეორე set სახელად even_numbers და გამოიყენეთ union(), intersection(), difference() ორივე set-ზე. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი

numbers = {12,23,21,12,32,102}

# numbers.add(344)
# numbers.add(310)
# print(numbers)

# numbers.remove(21)
# numbers.remove(12)
# print(numbers)


even_numbers = {102,101,344,346}

# გაერთიანება-union
nums_union = numbers.union(even_numbers)
print(nums_union)

# თანაკვეთა-intersection
nums_intersection = numbers.intersection(even_numbers)
print(nums_intersection)

# სხვაობა-difference
nums_difference = numbers.difference(even_numbers)
print(nums_difference)