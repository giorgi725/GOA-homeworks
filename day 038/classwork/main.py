# person = {
#     "username" : "gio",
#     "height" : 176,
#     "weight" :  1500,
#     "hobby" :"codding",
#     "isfree" : False,
# }

# for key,value in person.items():
#     print(f"key: {key}, value: {value}")


numbers = [23,35,67,5,543,86,79,87,32,53,323]
new_evens = []
for num in numbers:
    if num % 2 ==1:
        new_evens.append(num)
print(new_evens)


evens = [ num + 1 for num in numbers if num % 2 == 1]
print(evens)

number1 = [i + 4 for i in range(1,21) if i % 4 == 0]
print(number1)

number2 = [i * 3 for i in range(50) if i % 10 == 0]
print(number2)

# list comprehension - მარტივად გასაგები და კოდსაც მოკლედ ვწერთ



# print(person.clear())
# person["hobby"] = "nothing"
# print(person.update())

# print(person.pop("heigth"))
# print(person.get())
# print(person.keys())
# person.values - "gio"
# print(person.items())
# new_person = person.copy()
# print(id(person))