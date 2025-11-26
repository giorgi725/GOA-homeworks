# 13) შექმენით სტრინგი და შემოიტანეთ საძიებელი სიტყვა input-ით. თუ სიტყვა მოიძებნება find-ით, დაბეჭდეთ პოზიცია, სხვა შემთხვევაში კი დაბეჭდეთ word not found

text = "I visited Georgia, Armenia and Greece"

word = input("enter word: ")

position = text.find(word)

if position != -1:
    print(f"sityva '{word}', am poziciazea {position}")
else:
    print("word not found")