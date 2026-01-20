balance = 1000
transactions = []

def show_menu():
    print("1. ბალანსის შემოწმება")
    print("2. თანხის შეტანა")
    print("3. თანხის გატანა")
    print("4. ბოლო 5 ტრანზაქციის ნახვა")
    print("5. გასვლა")

def deposit():
    global balance
    while True:
        try:
            amount = int(input("შეიყვანეთ შეტანის თანხა: "))
            if amount <= 0:
                print(" გთხოვთ შეიყვანოთ დადებითი თანხა.")
                continue
            balance += amount
            transactions.append({'type': 'შეტანა', 'amount': amount, 'balance': balance})
            print(f" წარმატებით დამატდა {amount} ლარი. ახალი ბალანსი: {balance}")
            break
        except ValueError:
            print(" გთხოვთ შეიყვანოთ სწორი რიცხვი.")

def withdraw():
    global balance
    while True:
        try:
            amount = float(input("შეიყვანეთ გატანის თანხა: "))
            if amount <= 0:
                print(" გთხოვთ შეიყვანოთ დადებითი თანხა.")
                continue
            if amount > balance:
                print(f" საკმარისი ბალანსი არ არის. მიმდინარე ბალანსი: {balance}")
                continue
            balance -= amount
            transactions.append({'type': 'გატანა', 'amount': amount, 'balance': balance})
            print(f" წარმატებით გადარიცხა {amount} ლარი. ახალი ბალანსი: {balance}")
            break
        except ValueError:
            print(" გთხოვთ შეიყვანოთ სწორი რიცხვი.")

def show_balance():
    print(f" მიმდინარე ბალანსი: {balance} ლარი")

def show_last_transactions():
    print("\n ბოლო 5 ტრანზაქცია:")
    if not transactions:
        print("ტრანზაქცია არ არსებობს.")
        return
    for x in transactions[-5:]:
        print(f"{x['type']} - {['amount']} ლარი - ბალანსი: {x['balance']} ლარი")

while True:
    show_menu()
    choice = input("აირჩიეთ ოპცია (1-5): ")

    if choice == '1':
        show_balance()
    elif choice == '2':
        deposit()
    elif choice == '3':
        withdraw()
    elif choice == '4':
        show_last_transactions()
    elif choice == '5':
        print("\n გამოსვლა...")
        print(f"საბოლოო ბალანსი: {balance} ლარი")
        print(f"ტრანზაქციების საერთო რაოდენობა: {len(transactions)}")
        break
    else:
        print("არასწორი არჩევანი. გთხოვთ აირჩიოთ 1-დან 5-ის შუალედში.")



def greet():
    return "Welcome!"

def goodbye():
    return "Goodbye!"


def higher_order(par1):
    return par1

print(higher_order(greet()))
print(higher_order(goodbye()))

# pure 
#ar aqvs side effect
def something(a, b):
    return a + b

# Impure 
# aqvs side effect

def smth(word):
    print ("welcome" + word)


my_numbers =[12,312,3,23,12,3,123,12,312]

def double(x):
    return x * 2
print(list(map(double, my_numbers)))

result=[]
def manual_map(func, arr):
    for element in arr:
        result.append(func(element))


print(list(map(lambda x: x *2, [1,2,3,4,5,6,7]) ))

def manual_filter(func, arr):
    result = []
    for element in arr:
        if func(element):
            result.append(element)
    return result


def is_even(num):
    return num % 2 == 0

def manual_filter(func, arr):
    result = []
    for element in arr:
        if func(element):
            result.append(element)
    return result

print(list(filter(is_even, [1,23,4,4,5,6,7,7,78])))