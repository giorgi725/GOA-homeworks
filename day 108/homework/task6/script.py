# 6) დაწერეთ დეკორატორ ფუნქცია, რომელიც ინფორმაციას შეინახავს ფაილში. 
# გაქვთ ფუნქცია, რომელსაც გადაეცემა ტექსტი და დამატებით ერთი არგუმენტი, 
# რომელიც განსაზღვრავს ტექსტი მაღალ რეგისტრში უნდა გადავიდეს თუ დაბალში. 
# მიღებული შედეგი კი დეკორატორმა ფაილში უნდა ჩაწეროს.

def save_to_file(func):
    def wrapper(text, mode):
        result = func(text, mode)
        with open("result.txt", "a", encoding="utf-8") as file:
            file.write(result + "\n")
        return result
    return wrapper

@save_to_file
def change_case(text, mode):
    if mode == "upper":
        return text.upper()
    elif mode == "lower":
        return text.lower()
    else:
        return text

print(change_case("Hello World", "upper"))
print(change_case("Python Programming", "lower"))