# 1) დაწერეთ დეკორატორ ფუნქცია, რომელიც შეინახავს ისტორიას. 
# გაქვთ ფუნქცია, რომელიც ორ რიცხვს კრებს, დეკორატორი კი ბოლო ხუთ გამოთვლას ინახავს 
# და მთავარ შედეგთან ერთად პრინტავს.

def keep_history(func):
    history = []
    def wrapper(a, b):
        result = func(a, b)
        history.append(f"{a} + {b} = {result}")
        if len(history) > 5:
            history.pop(0)
        for item in history:
            print(item)
        return result
    return wrapper

@keep_history
def add(a, b):
    return a + b

add(2, 3)
add(5, 7)