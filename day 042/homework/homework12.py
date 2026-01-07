#13) დაწერეთ პროგრამა, რომელიც ფაილიდან "numbers.txt" კითხულობს პირველ ხაზს, გადააქცევს int-ად და ყოფს 100-ს ამ რიცხვზე. დაამუშავეთ ValueError და ZeroDivisionError

try:
    with open("numbers.txt", "r") as file:
        first_line = file.readline().strip() 
        number = int(first_line)            
        result = 100 / number                 
        print(result)
except ValueError:
    print("ფაილში პირველი ხაზი არ არის რიცხვი")
except ZeroDivisionError:
    print("ნულზე გაყოფა არ შეიძლება")