#დაწერეთ try-except-else-finally ბლოკი, რომელიც:

# ხსნის ფაილს "value.txt"
# კითხულობს რიცხვს
# ყოფს 50-ს ამ რიცხვზე
# წარმატების შემთხვევაში დაბეჭდავს შედეგს
# ბოლოს ყოველთვის დახურავს ფაილს

try:
    file = open("value.txt", "r")     
    line = file.readline().strip() 
    number = int(line)                   
    result = 50 / number                   
except ValueError:
    print("ფაილში რიცხვი არასწორია")
except ZeroDivisionError:
    print("ნულზე გაყოფა არ შეიძლება")
else:
    print(result)         
finally:
    if file:
        file.close()                      
        print("დაიხურა ფაილი")
