# 4) დაწერეთ დეკორატორ ფუნქცია, რომელიც ტექსტს შემთხვევითობის პრინციპით შეცვლის ასო-ბგერის რეგისტრს. 
# გაქვთ ფუნქცია, რომელსაც გადაეცემა სიტყვების კორტეჟი. 
# ფუნქციამ ეს სიტყვები უნდა გააერთიანოს, მიღებული წინადადება კი დეკორატორმა შეცვალოს.

import random

def random_case(func):
    def wrapper(words):
        sentence = func(words)
        new_sentence = ""
        for char in sentence:
            if char.isalpha():
                if random.choice([True, False]):
                    new_sentence += char.upper()
                else:
                    new_sentence += char.lower()
            else:
                new_sentence += char
        return new_sentence
    return wrapper

@random_case
def join_words(words):
    return " ".join(words)

print(join_words(("hello", "world", "print()")))