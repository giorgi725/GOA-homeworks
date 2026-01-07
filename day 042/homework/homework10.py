#11) დაწერეთ პროგრამა, რომელიც ცდილობს გახსნას ფაილი "data.txt" წაკითხვის რეჟიმში. თუ ფაილი არ არსებობს, გამოიტანეთ შეტყობინება „ფაილი ვერ მოიძებნა“. გამოიყენეთ try-except FileNotFoundError

try:
    with open("data.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("არ არსებობს ფაილი")
