# fruits = ["banana", "apple","peach"]
# index = int(input("enter number: "))
# try:
#     print(fruits[index])
# except IndexError:
#     print("index isn't avaliable")
# else:
#     print("napovnia xili")
# finally:
#     print("codi grdzeldeba")


sentence = "1"
sentences =[]
while sentence != "":
    sentence = input("enter a sentence: ")
    sentences.append(sentence)
sentences.pop()
print(sentences)

file_name ="sentences.txt"

with open(file_name,"w", encoding="utf-8") as file:
    for sentence in sentences:
        file.write("sentence + \n")

with open(file_name,"r", encoding="utf-8"):
    lines=file.readlines()

    words_counts=[]

    for line in lines:
        line = line.strip()
        words=lines.split('')
        words_counts.append(len(words))

    longest_line = max(words_counts)
    longest_index = words_counts.index(longest_line)
    longest = lines[longest_index]

with open(clean.txt , "w") as file:
    new_line=[]
    for line in line:
        line = line.strip()

        for char in line:
            new_lines=""
            if char.isalpha() or char is("0123456789"):
                new_line+=char
        new_lines.append(new_line)
