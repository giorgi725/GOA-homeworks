#2) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და გასაღებს, და აბრუნებს შესაბამის მნიშვნელობას. გამოიყენეთ try-except-else-finally ბლოკი KeyError-ის დასამუშავებლად

def get_value(dictionary, key):
    try:
        value = dictionary[key]
    except KeyError:
        print(f"{key} not found")
        return None
    else:
        return value
    finally:
        print("the end")