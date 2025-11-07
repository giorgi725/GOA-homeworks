# 10) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები

correct_pin = "1234"
attempts = 0

while attempts < 3:
    pin = input("შეიყვანე PIN კოდი: ")
    if pin == correct_pin:
        print("Access Granted")
        break
    else:
        print("Incorrect PIN")
        attempts += 1

if attempts == 3:
    print("Access Denied")