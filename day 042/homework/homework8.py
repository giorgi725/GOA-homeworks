#9) სთხოვეთ მომხმარებელს შეიყვანოს რიცხვი "input()"-ით და გადააკეთეთ "int"-ად. გამოიყენეთ "try" და "except", რომ გაუმკლავდეთ შეცდომას თუკი სიმბოლოები შეიყვანეს. დაბეჭდეთ „შეიყვანეთ მხოლოდ რიცხვი“

try:
    user_input = input("enter number:")
    number = int(user_input)
    print(number)
except ValueError:
    print("შეიყვანეთ მხოლოდ რიცხვი")

