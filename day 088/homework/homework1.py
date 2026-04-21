def count_consonants(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char.isalpha() and char not in vowels:
            count += 1
    return count

text = input("enter text min 4 char: ")

words = text.split()

if len(words) < 4:
    print("please enter min 4 char")
else:
    with open("words.txt", "w", encoding="utf-8") as file:
        file.write(text)
    with open("words.txt", "r", encoding="utf-8") as file:
        content = file.read()

    consonants = count_consonants(content)
    word_list = content.split()
    shortest_word = min(word_list, key=len)

    swapped_text = content.swapcase()
    with open("processed.txt", "w", encoding="utf-8") as file:
        file.write(swapped_text)

print("words:", len(word_list))
print("vowels:", consonants)
print("shortest: ", shortest_word)