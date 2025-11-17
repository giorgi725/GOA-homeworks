
pin_list = ["1221", "2222", "4444", "3333"]

pin_correct = False

user_pin = input("Enter pin: ")

for pin in pin_list:
    if user_pin == pin:
        pin_correct = True
        break


if pin_correct:
    print("Pin correct")
else:
    print("Pin incorrect")

products=["cheese", "bread", "water"]
user_choice=input("pick a prodect (1-3):")-1
print(products[user_choice])


products = ["cheese", "bread", "water"]

choice = input("pick a product (1-3): ")

choice = int(choice)

index = choice - 1

print("your product", products[index])

sports = ["Football", "Basketball", "Tennis","Volleyball","Karate", "Rugby", "Basketball","Tennis","Swimming", "Boxing", "Taekwondo", "Karate", "Baseball"]
print(sports[2])

sports[0] = "box"
print( sports)


print(sports[1:5]) # 2 dan 5 mde

print(sports[3:]) # 3is mere

print(sports[:6]) # 6 mde yvela

print(sports[::-1]) # mtliani shebrunebulad
