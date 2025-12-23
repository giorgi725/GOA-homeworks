# 8) სიტყვების სიიდან "words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']" შეარჩიეთ მხოლოდ ისინი, რომლების სიგრძე მეტია 5-ზე, ჯერ "for"-ით, შემდეგ list comprehension-ით

words = ['apple', 'banana', 'cat', 'elephant', 'dog', 'grapefruit']

new_list =[]
for word in words:
    if len(word) > 5:
        new_list.append(word)
print(new_list)

new_list =[word for word in words if len(word)>5]
print(new_list)