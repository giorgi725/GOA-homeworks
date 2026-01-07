#10) შექმენით ფაილი "numbers.txt" და ჩაწერეთ მასში რამდენიმე რიცხვი (თითო ხაზზე ერთი). შემდეგ წაიკითხეთ ფაილი, გადააკეთეთ თითოეული ხაზი int-ად და დაბეჭდეთ მათი ჯამი. გამოიყენეთ try და except ValueError არასწორი მონაცემების 

with open("numbers.txt", "w") as file:
    file.write("10\n")
    file.write("20\n")
    file.write("abc\n")  
    file.write("30\n")

total = 0

with open("numbers.txt", "r") as file:
    for line in file:
        try:
            number = int(line.strip())
            total += number
        except ValueError:
            print(line.strip())

print(total)
