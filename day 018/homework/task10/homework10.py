# 11) მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ -1-ს არ შეიყვანს. საბოლოოდ გამოიანგარიშოს შეყვანილი რიცხვების საშუალო

total = 0
count = 0

while True:
    number = int(input("შეიყვანე რიცხვი: "))
    if number == -1:
        break
    total += number
    count += 1

if count > 0:
    average = total / count
    print("რიცხვების საშუალო არის:", average)
else:
    print("რიცხვი არ შეგიყვანია.")