#  საწყისი ბალანსი: 1000 ლარი
# •    მთავარი მენიუ (while ციკლით):
# ბალანსის შემოწმება
# თანხის შეტანა
# თანხის გატანა
# ბოლო 5 ტრანზაქციის ნახვა
# გასვლა
# •    ყოველ ოპერაციაზე:
# იყენებს try-except ბლოკს:
# ValueError - არასწორი რიცხვის შეტანა
# არასწორი მენიუს არჩევანი
# თანხის გატანისას ამოწმებს საკმარისი ბალანსის არსებობას
# შეტანისას და გატანისას ამოწმებს დადებითი რიცხვის შეყვანას
# •    ინახავს ტრანზაქციების ისტორიას სიაში: [{'type': 'შეტანა/გატანა', 'amount': თანხა, 'balance': ახალი_ბალანსი}, ...]
# •    აჩვენებს ბოლო 5 ტრანზაქციას ფორმატირებული სახით
# •    გასვლისას აჩვენებს საბოლოო ბალანსს და ტრანზაქციების რაოდენობას

balance = 1000
transactions = []

def show_menu():
    print("\n მთავარი მენიუ:")
    print("1 - ბალანსის შემოწმება")
    print("2 - თანხის შეტანა")
    print("3 - თანხის გატანა")
    print("4 - ბოლო 5 ტრანზაქციის ნახვა")
    print("5 - გასვლა")

def deposit():
    global balance
    while True:
        try:
            amount = float(input("შეიყვანეთ შეტანის თანხა: "))
            if amount <= 0:
                print(" გთხოვთ შეიყვანოთ დადებითი თანხა.")
                continue
            balance += amount
            transactions.append({'type': 'შეტანა', 'amount': amount, 'balance': balance})
            print(f" წარმატებით დამატდა {amount:.2f} ლარი. ახალი ბალანსი: {balance:.2f}")
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
                print(f" საკმარისი ბალანსი არ არის. მიმდინარე ბალანსი: {balance:.2f}")
                continue
            balance -= amount
            transactions.append({'type': 'გატანა', 'amount': amount, 'balance': balance})
            print(f" წარმატებით გადარიცხა {amount:.2f} ლარი. ახალი ბალანსი: {balance:.2f}")
            break
        except ValueError:
            print(" გთხოვთ შეიყვანოთ სწორი რიცხვი.")

def show_balance():
    print(f" მიმდინარე ბალანსი: {balance:.2f} ლარი")

def show_last_transactions():
    print("\n ბოლო 5 ტრანზაქცია:")
    if not transactions:
        print("ტრანზაქცია არ არსებობს.")
        return
    for x in transactions[-5:]:
        print(f"{x['type'].capitalize():<7} - {x['amount']:.2f} ლარი - ბალანსი: {x['balance']:.2f} ლარი")

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
        print(f"საბოლოო ბალანსი: {balance:.2f} ლარი")
        print(f"ტრანზაქციების საერთო რაოდენობა: {len(transactions)}")
        break
    else:
        print("არასწორი არჩევანი. გთხოვთ აირჩიოთ 1-დან 5-ის შუალედში.")
