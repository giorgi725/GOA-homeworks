# 2) დაწერეთ პროგრამა რომელიც ითხოვს ორ რიცხვს მომხმარებლისგან შემოაყვანინეთ დაწყებისა და დასრულების რიცხვი თუ მეორე რიცხვი ნაკლებია პირველზე დაბეჭდეთ არასწორი შუალედი სხვა შემთხვევაში დაბეჭდეთ ყველა რიცხვი შუალედში და იპოვეთ ამ რიცხვების ჯამი გამოიყენეთ for input int if else და sum

num1=int(input("Enter start number:"))
num2=int(input("Enter end number:"))

if num2<num1:
    print("Invalid interval!")
else:
    print("Numbers in the interval:")
    numbers=[]

    for interval in range(num1, num2 + 1):
        print(interval)
        numbers.append(interval)
    
    total = sum(numbers)
    print(total)