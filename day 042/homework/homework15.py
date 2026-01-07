#16) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და გასაღებს, და აბრუნებს შესაბამის მნიშვნელობას. გამოიყენეთ try-except-else-finally ბლოკი KeyError-ის დასამუშავებლად

def get_value(dictionary, key):
    try:
        value = dictionary[key]        
    except KeyError:
        print(key)
    else:
        print(value)
        return value
    finally:
        print("დასრულდა")

my_dict = {"name": "Giorgi", 
        "age": 25, 
        "city": "Tbilisi"
}

get_value(my_dict, "age")     
get_value(my_dict, "country")
