# 2) ერეთ დეკორატორ ფუნქცია, რომელიც ტექსტს დაამუშავებს და გარკვეულ სიტყვებს „გაფილტრავს“. 
# გაქვთ ფუნქცია, რომელსაც გადაეცემა ტექსტი.  ფუნქციამ უნდა დაითვალოს ტექსტში ასო-ბგერების რაოდენობა. 
# დეკორატორმა კი - ტექსტში შემავალი კონკრეტული სიტყვები (თქვენი გემოვნებით) ჩაანაცვლოს *** სიმბოლოებით.

def filter_words(func):
    banned_words = ["bad", "stupid", "noob"]

    def wrapper(text):
        filtered_text = ""
        for word in banned_words:
            filtered_text = filtered_text.replace(word, "***")

        print(filtered_text)
        return func(filtered_text)
    return wrapper


@filter_words
def count_letters(text):
    count = 0
    for char in text:
        if char.isalpha():
            count += 1
    return count


count_letters("this is texttt")