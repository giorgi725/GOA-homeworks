# 10) მომხმარებელს შემოატანინეთ სიტყვა, შემდეგ if-ით შეამოწმეთ ეს სიტყვა თუ თავისი თავის ტოლია როდესაც შემოაბრუნებთ (slicing-ის დახმარებით), თუ ასეა დაბეჭდეთ რომ განსაკუთრებული (ასეთ სიტყვებს palindrome ჰქვია) სიტყვაა, სხვა შემთხვევაში კი დაბეჭდეთ რომ ჩვეულებრივი სიტყვაა

word = input("Enter a word: ")

reversed_word = word[::-1]

if word == reversed_word:
    print("Its palindrome")
else:
    print("Its regular word")