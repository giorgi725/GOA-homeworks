# შეასრულეთ 3 მაგალითი ყველა მეთოდზე: split, join, replace, strip

# split
text = "hello world"
print(text.split()) #['hello', 'world']

text = "1,2,3,4"
print(text.split(",")) #['1', '2', '3', '4']

text = "goa-is-awesome"
print(text.split("-")) #['goa', 'is', 'awesome']

# join

words = ["hello", "world"]
print(" ".join(words)) #"hello world"

nums = ["1", "2", "3"]
print("-".join(nums)) #"1-2-3"

letters = ["P", "y", "t", "h", "o", "n"]
print("".join(letters)) #"Python"

# replace

text = "hello world"
print(text.replace("world", "python")) #"hello python"

text = "banana"
print(text.replace("a", "o")) # "bonono"

text = "I like Java"
print(text.replace("Java", "Python")) #"I like Python"

# strip

text = "   hello   "
print(text.strip()) #"hello"

text = "***python***"
print(text.strip("*")) #"python"

text = "///home///"
print(text.strip("/")) #"home"