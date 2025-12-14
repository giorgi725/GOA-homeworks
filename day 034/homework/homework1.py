# 2) შექმენით ფუნქცია manual_index, რომელიც მიიღებს სიას და ელემენტს და დააბრუნებს ელემენტის ინდექსს სიაში. გამოიყენეთ მხოლოდ loop და if, .index მეთოდის გარეშე

def manual_index(list,element):
    index = 0
    for item in list:
        if item == element:
            return index
        index += 1
    return -1