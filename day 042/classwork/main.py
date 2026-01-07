# data_file = open("data_txt","w")

# print(data_file.write("123123412"))
# data_file.close()


# # syntaxError  წერითი შეცდომა
# print("uhewf")
# #typeError არასწწორ მონაცემთა ტიპს შორის ვასრულებათ დავალებას
# print("ewihfbchi" + 237)
# #indexError როდესაც გამოძახებული ინდექსი არ არსებობს
# data=[23,32,32,32]
# print(data[9])
# #nameError name ცვლადი არ არსებობს
# print(data) 
# #valueError 
# print(int("bewhcasbh"))
# # #keyError dictionary დან ისეთი გასაღებზე მიწვდომა გვინდა რომელიც არ არსებობს
# # data = {
# #     "name":"me"
# #     "lastname":"not me"
# # }
# print(data["age"])
# #filenotfindError როცა მოცემული ფაილი არ არსებობს
# open("ar arsebobs","w")
# #zerodivisonError 0ზე გაყოფა არ შეიძლება
# print(10/0)

#error ის შემთხვევაშო კოდი არ ეშვება
#bug ის შემთხვევაში ეშვება მარა სასურველ შედეგს ვერ ვიღებთ




with open("names.txt", "w") as file:
    line=file.readlines()
    for line in line:
        line=line
        print(line,end="!!!")