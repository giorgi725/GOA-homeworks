# 3) დაწერეთ დეკორატორ ფუნქცია, რომელიც შეცვლის ფუნქციის გამოთვლილ შედეგს. 
# გაქვთ ფუნქციები, რომლებიც ორ რიცხვზე აკეთებენ ოთხ საბაზისო არითმეტიკულ ოპერაციას (ოთხივე ცალ-ცალკე აღწერეთ). 
# დეკორატორის დანიშნულებაა, თუ ფუნქციის შედეგი ლუწია გაამრავლოს ორზე, 
# ხოლო თუ კენტი - გაამრავლოს ორზე და დაუმატოს ერთი.

def modify_result(func):
    def wrapper(a, b):
        result = func(a, b)
        if result % 2 == 0:
            result *= 2
        else:
            result = result * 2 + 1
        return result
    return wrapper

@modify_result
def add(a, b):
    return a + b

@modify_result
def subtract(a, b):
    return a - b

@modify_result
def multiply(a, b):
    return a * b

@modify_result
def divide(a, b):
    return a / b


print(add(4, 2))       
print(subtract(7, 2))  
print(multiply(3, 4))   
print(divide(8, 2))   