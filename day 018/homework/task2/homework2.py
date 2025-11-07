# 3) while ციკლის საშვალებით დაბეჭდეთ რიცხვები 0-იდან 20-მდე, შეამოწმეთ თითოეული რიცხვი ლუწია თუ კენტი, თუ ლუწია დაბეჭდეთ "even" თუ კენტია დაბეჭდეთ odd და გვერდზე მიუწერეთ ეს რიცხვი თითოეულ შემთხვევაში

i = 0  # ვიწყებთ 0-დან

while i <= 20:  # სანამ i ნაკლებია ან ტოლია 20-ის
    if i % 2 == 0:
        print(i, "even")
    else:
        print(i, "odd")
    i += 1 

# 0 even
# 1 odd
# 2 even
# 3 odd
# 4 even
# 5 odd
# 6 even
# 7 odd
# 8 even
# 9 odd
# 10 even
# 11 odd
# 12 even
# 13 odd
# 14 even
# 15 odd
# 16 even
# 17 odd
# 18 even
# 19 odd
# 20 even