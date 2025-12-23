# Extra 5: Repeat a Word Multiple Times
# Instructions:
# Write a program repeat_word(word, times) that repeats a word times times.
# Test Cases:
# assert repeat_word("hi", 3) == "hihihi"
# assert repeat_word("Python", 2) == "PythonPython"
# assert repeat_word("x", 5) == "xxxxx"

def repeat_word(word, times):
    return word * times

print(repeat_word ("hello", 5))