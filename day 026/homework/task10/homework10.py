# 11) შემოიტანეთ სიტყვა input-ით და მოძებნეთ ასო a-ს პირველი პოზიცია

word = input("enter word: ")
position = word.find('a') 
if position != -1:
    print(f"am poziciazea {position}")
else:
    print("ar aris")