#7) სცადეთ რიცხვი გაყვოთ ნულზე, გამოიყენეთ "try" და "except" რათა თავიდან აიცილოთ შეცდომა და დაბეჭდოთ „ნულზე გაყოფა არ შეიძლება“

try:
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    print("ნულზე არ იყოფა")