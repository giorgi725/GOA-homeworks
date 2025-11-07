# 14) while ციკლის საშვალებით მომხმარებელს შეეკითხეთ რიცხვი ყოველ ჯერზე, თუ რიცხვი კენტია გააგრძელეთ ციკლი (გამოიყენეთ continue), თუ რიცხვი ლუწია დაბეჭდეთ "even number detected" და თუ რიცხვი 0-ის ტოლია შეწყვიტეთ ციკლი (გამოიყენეთ break)

while True:
    number = int(input("შეიყვანე რიცხვი: "))

    if number == 0:
        print("ციკლი დასრულდა.")
        break    
    elif number % 2 != 0:
        continue   
    else:
        print("even number detected")  