# 3) შექმენით ფუნქცია manual_count, რომელიც მიიღებს სიას და ელემენტს და დააბრუნებს ელემენტის რაოდენობას სიაში. გამოიყენეთ მხოლოდ loop და if, .count მეთოდის 

def manual_count(list,element):
    count = 0
    for item in list:
        if item == element:
            return count
        count += 1
    return -1

