#18) დაწერეთ პროგრამა, რომელიც მომხმარებლის შეყვანილ ფაილის სახელს ხსნის with context manager-ით და კითხულობს შიგთავსს. თუ ფაილი არ არსებობს ან წაკითხვა ვერ ხერხდება, გამოიტანეთ შესაბამისი შეტყობინება

file_name = input("შეიყვანეთ ფაილის სახელი: ")

try:
    with open(file_name, "r") as file:
        content = file.read()
        print("ფაილის შიგთავსი:")
        print(content)
except FileNotFoundError:
    print("ვერ მოიძებნა")
except IOError:
    print("ფაილის წაკითხვა ვერ ხერხდება")
