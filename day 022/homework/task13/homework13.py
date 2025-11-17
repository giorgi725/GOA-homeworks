# 14) შექმენით პროგრამა რომელშიც გექნებათ ხილის სია კალათა (list), 
# შემდეგ მომხარებელს შემოატანინეთ თავისი საყვარელი ხილი (input), 
# დაადეკლარირეთ ცვლადი რომელიც დაადგენს არის თუ არა ხილი 
# კალათაში (variable) fruit_in_basket რომლის მნიშვნელობა თავიდან 
# იქნება False, for ციკლის საშვალებით (for loop) განიხილეთ კალათა 
# და პირობითი განცხადების საშვალებით (if-else) შეადარეთ მომხარებლის 
# საყვარელ ხილს, თუ ისინი ტოლი იქნება fruit_in_basket ცვლადის 
# მნიშვნელობა შეცვალეთ True boolean-ით, საბოლოოდ პირობითი განცხადების 
# საშვალებით (if-else) შეამოწმეთ მომხმარებლის საყვარელი ხილი არის თუ 
# არა კალათაში fruit_in_basket, თუ არის დაუბეჭდეთ 'Good choice' თუ
# არ არის 'Fruit not in basket'

basket = ["apple", "banana", "cherry", "date", "fig"]
users_favourite=input("enter fruit:")
fruit_in_basket=False

for fruit in basket:
    if fruit == users_favourite:
        fruit_in_basket = True
        break 

if fruit_in_basket:
    print("Good choice")
else:
    print("Fruit not in basket")


