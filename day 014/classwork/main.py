#1) while ციკლის გამოყენებით გამოიტანეთ რიცხვები, კომენტარებით დაწერეთ რა არის counter ცვლადი და შესაძლოა თუ არა რომ while ციკლი გაგრძელდეს უსასრულოდ, მოიყვანეთ მაგალითი

i1 = 20
while i1>0:
    i1 -= 1
    print(i1)

print("Loop ended")

i2 = 20
while i2<40 :
    i2 += 1
    print(i2)

print("Loop ended")

i3 = 50
while i3<100:
    i3 += 2
    print(i3)

print("Loop ended")


pin_code="5678"

code = input("Enter yout pin code: ")

while code != pin_code :
    code = input("Enter your code: ")

print("code is correct !")