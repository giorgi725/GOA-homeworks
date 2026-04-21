balance = 1000
def check_balance():
    print(f"Your current balance {balance}$")

def deposit(user_balance):
    while True:
        try:
            amount = input("How much would you like to deposit: ")
            if amount == "x":
                return user_balance
            if not amount.isdigit():
                print("Deposit amount must be a number")
                raise ValueError("Deposit amount must be a number")
            amount = float(amount)
            if amount <= 0:
                print("Deposit amount has to be a positive number")
                raise ValueError("Deposit amount has to be a positive number")
            new_balance = user_balance + amount
            check_balance(new_balance)
            return new_balance
        except:
            pass

def Withdraw(user_balance):
    print("Enter X returning to main menu")
    while True:
        try:
            amount = input("How much would you like to withdraw: ")
            if amount == "x":
                return user_balance
            if not amount.isdigit():
                print("Withdraw amount must be a number")
                raise ValueError("Withdraw amount must be a number")
            amount = float(amount)
            if amount <= 0:
                print("Withdraw amount has to be a positive number")
                raise ValueError("Withdraw amount has to be a positive number")
            new_balance = user_balance + amount
            check_balance(new_balance)
            if amount > user_balance:
                print("Not enough balance on account in order to complete the withdraw request")
                raise("Not enough balance on account in order to complete the withdraw request")
            new_balance = balance - amount
            
        except:
            pass

def Main():
    while True:
        try:
            print("Welcome ATM!")

            print("1. Check balance")
            print("2. Deposit")
            print("3. Withdraw")
            print("4. Last 5 transaction")
            print("5. Exot the ATM")

            option = input("pick operation (1-5): ")

            if not option.isdigit():
                raise ValueError("Must enter valid operation number")
            
            option = int(option)
            if option == 1:
                check_balance()
            elif option == 2:
                new_balance = deposit(balance)
                balance = new_balance
                check_balance(balance)
            elif option == 3:
                new_balance = Withdraw(balance)
                balance = new_balance
                check_balance(balance)
            elif option == 4:
                pass
            elif option == 5:
                print("thank you for your services")
                print("Quiting program wait")
                exit()
            else:
                print("Invalid operation choose (1-5)")
                raise ValueError("Invalid operation")
        except:
            pass