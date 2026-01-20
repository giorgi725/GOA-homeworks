# 2) დაწერეთ ფუნქცია, რომელიც იღებს ასაკს და თუ ის უარყოფითია, გამოიყენეთ 'raise' რათა გამოაგდოს 'ValueError' შეტყობინებით "ასაკი არ შეიძლება იყოს უარყოფითი"

def age():
    if age < 0:
        raise ValueError("ასაკი არ შეიძლება იყოს უარყოფითი")
    return f"ასაკი : {age}"

# 3) დაწერეთ ფუნქცია, რომელიც იღებს სიტყვას და თუ ის ცარიელია, გამოიყენეთ 'raise' რათა გამოაგდოს 'ValueError' შეტყობინებით "სიტყვა არ უნდა იყოს ცარიელი"

def smth(word):
    if word == "":
        raise ValueError("სიტყვა არ უნდა იყოს ცარიელი")
    return f"სიტყვა: {word}"

# 4) შექმენით 'lambda' ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს

sum_two = lambda a, b: a + b 

# 5) შექმენით 'lambda' ფუნქცია, რომელიც გადაყავს ცელსიუსი ფარენჰეიტში და გამოიყენეთ 'for' ციკლში

c_to_f = lambda c: c * 9/5 + 32

for c in [0, 10, 20, 30]:
    print(c, "°C =", c_to_f(c), "°F")

# 6) რიცხვების სიაზე "nums = [3, 6, 9, 12, 15]" გამოიყენეთ 'map', რათა ყველა რიცხვი გაიზარდოს 5-ით

nums = [3, 6, 9, 12, 15]

result = list(map(lambda x: x + 5, nums))

print(result)

# 7) სიტყვების სიაზე "words = ['hello', 'world', 'python']" გამოიყენეთ 'map', რათა ყველა სიტყვა გადაიქცეს დიდ ასოებად

words = ['hello', 'world', 'python']

res = list(map(lambda x:x.upper(), words))

print(res)

# 8) რიცხვების სიაზე "nums = [5, 8, 11, 14, 17]" გამოიყენეთ 'filter', რათა დატოვოთ მხოლოდ რიცხვები რომლებიც მეტია 10-ზე

nums = [5, 8, 11, 14, 17]

result = list(filter(lambda x: x > 10, nums))

print(result)

# 9) სიტყვების სიაზე "words = ['ant', 'elephant', 'dog', 'giraffe']" გამოიყენეთ 'filter', რათა დატოვოთ მხოლოდ ის სიტყვები, რომლების სიგრძეა მეტი ან ტოლია 5-ის

words = ['ant', 'elephant', 'dog', 'giraffe']

result = list(filter(lambda x: len(x) >= 5, words))

print(result)

# 10) რიცხვების სიაზე "nums = [2, 4, 6, 8]" გამოიყენეთ 'map' და 'lambda', რათა ყველა რიცხვი გაორმაგდეს

nums = [2, 4, 6, 8]

res1 = list(map(lambda x: x * 2, nums))

print(res1)

# 11) რიცხვების სიაზე "nums = [1, 2, 3, 4, 5, 6]" გამოიყენეთ 'filter' და 'map' ერთად 'lambda'-თან, რათა გაფილტრდეს ლუწები და შემდეგ ყველა ლუწი გაიზარდოს 10-ით

nums = [1, 2, 3, 4, 5, 6]

even_nums = list(filter(lambda x: x % 2 == 0, nums))

print(even_nums)