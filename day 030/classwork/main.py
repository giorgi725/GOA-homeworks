
fruits = ( "apple", "grapes" "peach" ,"grapes")

print(fruits.count(3))
print(fruits.index("grapes"))


def manual_count(sequence, target):
    count = 0
    for elements in sequence:
        if elements == target:
            count += 1
    return count

result = manual_count(fruits, "grapes")
print(result)

print(type(fruits))