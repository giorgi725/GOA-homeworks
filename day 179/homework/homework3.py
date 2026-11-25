# 3) დაწერეთ ფუნქცია, რომელიც ორი სიის საერთო ელემენტებს იპოვის. გამოიყენეთ A=[9, 4, 8, 6, 1, 7], B=[3, 5, 7, 13, 2]. ამოხსენით ამოცანა ჩადგმული ციკლების გამოყენებით და განსაზღვრეთ დროითი სირთულე

def common_elements(A, B):
    result = []

    for element in A:
        for item in B:
            if element == item:
                result.append(element)

    return result


A = [9, 4, 8, 6, 1, 7]
B = [3, 5, 7, 13, 2]

print(common_elements(A, B))

# დროითი სირთულე (Time Complexity)
# O(n × m)