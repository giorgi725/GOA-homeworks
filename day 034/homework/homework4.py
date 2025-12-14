# 5) დაწერეთ ფუნქცია, რომელიც მიიღებს სიას და დაბეჭდავს უნიკალურ ელემენტებს და მათ რაოდენობას სიაში, მაგ: apple - 2, banana - 3... გამოიყენეთ .count მეთოდი 

fruits = ["apple", "banana", "apple", "orange", "banana", "banana"]


def unique_element(list):
    unique_items = []

    for item in list:
        if item not in unique_items:
            unique_items.append(item)
            print(item, "-", list.count(item))

unique_element(fruits)
