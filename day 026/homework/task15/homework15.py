# 16) შექმენით ფუნქცია რომელიც მიიღებს რიცხვს (int) და სიტყვას (string) პარამეტრებად, ფუნქციამ მიღებული სიტყვა უნდა დაბეჭდოს იმდენჯერ რამდენიც არის რიცხვის არგუმენტი x

def repeat_word(number, word):
    for i in range(number):
        print(word)

repeat_word(3,"hello")