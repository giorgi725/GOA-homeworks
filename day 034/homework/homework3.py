# 4) შექმენით სიები fruits, colors, numbers. თითოეულზე გამოიყენეთ index, count, sort, sorted, min, max მეთოდები & ფუნქციები და დააკომენტარეთ თითოეული მაგალითი (რას აკეთებს)

fruits = ["apple", "banana", "orange", "banana", "kiwi"]
colors = ["red", "blue", "green", "yellow"]
numbers = [5, 2, 9, 1, 5, 7]

# index აბრუნებს ელემენტის პირველ ინდექსს სიაში

print(fruits.index("banana"))   # 1
print(colors.index("green"))    # 2
print(numbers.index(9))         # 2

# count ითვლის რამდენჯერ გვხვდება ელემენტი სიაში

print(fruits.count("banana"))   # 2
print(numbers.count(5))         # 2
print(colors.count("red"))      # 1

# sort ალაგებს სიას ზრდადობით

numbers.sort()
print(numbers)                  # [1, 2, 5, 5, 7, 9]

fruits.sort()
print(fruits)                   # ['apple', 'banana', 'banana', 'kiwi', 'orange']


# sorted აბრუნებს ახალ დალაგებულ სიას და ორიგინალს არ ცვლის

sorted_colors = sorted(colors)
print(sorted_colors)            # ['blue', 'green', 'red', 'yellow']
print(colors)                   # ['red', 'blue', 'green', 'yellow']


# min პოულობს ყველაზე პატარა ელემენტს

print(min(numbers))             # 1
print(min(colors))              # 'blue'
print(min(fruits))              # 'apple'

# max პოულობს ყველაზე დიდ ელემენტს

print(max(numbers))             # 9
print(max(colors))              # 'yellow'
print(max(fruits))              # 'orange'
