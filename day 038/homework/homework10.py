# 11) სიიდან "animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']" შექმენით ახალი სია, რომელიც შეიცავს სიტყვების პირველ ასოებს, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ აირჩიეთ მხოლოდ ის სიტყვები, რომლებიც "e"-ზე იწყება

animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']

first_letters = []
for a in animals:
    first_letters.append(a[0])
print(first_letters)

first_letters = [a[0] for a in animals]
print(first_letters)


e_animals = []
for a in animals:
    if a.startswith('e'):
        e_animals.append(a)

print(e_animals)

e_animals = [a for a in animals if a.startswith("e")]
print(e_animals)