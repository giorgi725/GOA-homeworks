# 12) დაწერე ფუნქცია, რომელიც იღებს სიტყვების სიას და აბრუნებს სიის ყველაზე გრძელ სიტყვას. გამოიყენე ციკლი და 'len()' შედარებისთვის     return None  # ცარიელი სიის შემთხვევაში

def longest(words):
    max_word = words[0]
    for word in words:
        if len(word) > len(max_word):
            max_word = word
    return max_word

words_list = ["banana", "apple", "strawberry", "peach"]
print(longest(words_list))  