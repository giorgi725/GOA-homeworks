# 5) დაწერეთ დეკორატორ ფუნქცია, რომელიც შეინახავს ისტორიას. 
# გაქვთ ფუნქცია, რომელიც ორ რიცხვს ამრავლებს ერთმანეთზე. 
# დეკორატორი კი ბოლო გამოთვლის მიხედვით ცვლის შედეგს. 
# თუ ბოლო გამოთვლა ლუწია, მიმდინარე შედეგი უნდა დააბრუნოს კენტი. 
# თუ მიმდინარე შედეგი ლუწია 1-ს ამატებს, ხოლო თუ კენტი - უცვლელად ტოვებს. 
# დეკორატორმა ყველა გამოთვლა უნდა დააბრუნოს ლუწი-კენტი-ლუწი-კენტი პრინციპით.

def keep_history(func):
    history = []
    def wrapper(a, b):
        result = func(a, b)
        if history:
            last_result = history[-1]
            if last_result % 2 == 0:
                if result % 2 == 0:
                    result += 1
            else:
                if result % 2 != 0:
                    result += 1
        history.append(result)
        return result
    return wrapper

@keep_history
def multiply(a, b):
    return a * b

print(multiply(2, 2))   
print(multiply(3, 3))   
print(multiply(5, 1))   