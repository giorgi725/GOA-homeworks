# 13) მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი დადებითია, შეამოწმეთ შიგნით მეორე if-ით არის თუ არა ლუწი, თუ ლუწია დაბეჭდეთ "Positive and even", თუ არა "Positive and odd". ხოლო თუ რიცხვი უარყოფითია, შეამოწმეთ მეორე if-ით არის თუ არა 10-ზე ნაკლები, თუ ნაკლებია დაბეჭდეთ "Negative and small", სხვა შემთხვევაში "Negative and large"number = int(input("შეიყვანე რიცხვი: "))

number = int(input("შეიყვანე რიცხვი: "))

if number > 0:
    if number % 2 == 0:
        print("Positive and even")
    else:
        print("Positive and odd")
elif number < 0:
    if number < -10:
        print("Negative and large")
    else:
        print("Negative and small")
else:
    print("Zero")
