
#შექმენით პროგრამა, რომელიც:
# •    კლავიატურიდან მიიღებს ტექსტს (მინიმუმ 3 წინადადება)
# •    შეინახავს ამ ტექსტს input.txt ფაილში
# •    წაიკითხავს ფაილს და შეასრულებს შემდეგ ოპერაციებს:
# დათვლის ხმოვანი ასოების რაოდენობას (a, e, i, o, u)
# იპოვის ყველაზე გრძელ სიტყვას
# შეცვლის ყველა ციფრს "*" სიმბოლოთი
# •    დამუშავებული ტექსტი შეინახოს output.txt ფაილში
# •    კონსოლში გამოიტანოს სტატისტიკა: ხმოვნების რაოდენობა და ყველაზე გრძელი სიტყვა


text = input("enter sentences:\n")

with open("input.txt", "w", encoding="utf-8") as file:
    file.write(text)

with open("input.txt", "r", encoding="utf-8") as file:
    content = file.read()

count_vowels = 0
vowels = "aeiou"
for char in text:
    if char in vowels:
        count_vowels+=1

processed_text = ""
for ch in content:
    if ch.isdigit():
        processed_text += "*"
    else:
        processed_text += ch

with open("output.txt", "w", encoding="utf-8") as file:
    file.write(processed_text)

