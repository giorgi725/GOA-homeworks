# 12) მოცემული სტრინგია "I visited Georgia, Armenia and Greece". მოძებნეთ Armenia და დაბეჭდეთ მისი პოზიცია

word = "I visited Georgia, Armenia and Greece"

position = word.find('Armenia')

if position != -1:
    print((f"pozicia {position}"))
else:
    print("ar aris")