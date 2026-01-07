#15) დაწერეთ ფუნქცია, რომელიც იღებს სიას და ინდექსს, და აბრუნებს ელემენტს მოცემული ინდექსით. დაამუშავეთ IndexError გამონაკლისი, თუ ინდექსი არასწორია

def get_element(lst, index):
    try:
        return lst[index]
    except IndexError:
        print("ინდექსი არასწორია")

numbers = [10, 20, 30, 40]

print(get_element(numbers, 3)) 
print(get_element(numbers, 9))
