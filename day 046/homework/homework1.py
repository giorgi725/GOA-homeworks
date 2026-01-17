#კლავიატურიდან მიიღებს ტექსტს (მინიმუმ 4 სიტყვა)
# შეინახავს ამ ტექსტს words.txt ფაილში
# წაიკითხავს ფაილს და შეასრულებს შემდეგ ოპერაციებს:
# დათვლის თანხმოვანი ასოების რაოდენობას
# იპოვის ყველაზე მოკლე სიტყვას
# გადაიყვანს ყველა დიდ ასოს პატარა ასოში და პირიქით (swap case)
# დამუშავებული ტექსტი შეინახოს processed.txt ფაილში
# კონსოლში გამოიტანოს: სიტყვების რაოდენობა, თანხმოვნები და ყველაზე მოკლე სიტყვა


text = input("შეიყვანეთ ტექსტი (მინიმუმ 4 სიტყვა): ")

words = text.split()
if len(words) < 4:
    print("ტექსტი უნდა შეიცავდეს მინიმუმ 4 სიტყვას!")
    exit()

with open("words.txt", "w", encoding="utf-8") as file:
    file.write(text)

with open("words.txt", "r", encoding="utf-8") as file:
    file_text = file.read()

vowels = "aeiouAEIOU"
consonant_count = 0

for char in file_text:
    if char.isalpha() and char not in vowels:
        consonant_count += 1

file_words = file_text.split()
shortest_word = min(file_words, key=len)

processed_text = file_text.swapcase()

with open("processed.txt", "w", encoding="utf-8") as file:
    file.write(processed_text)
