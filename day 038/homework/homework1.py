# 2) შექმენით dictionary სახელად student, დაამატეთ მას მონაცემები: name, hobby, height, weight. შემდეგ გამოიყენეთ .get() მეთოდი name-ის მისაღებად და .pop() მეთოდი height-ის წასაშლელად. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი

student = {
    "name": "gio",
    "hobby" : "codding",
    "height" : "176",
    "weight" : "weight",
}

print(student.get("name"))
print(student.pop("height"))

# get("name") get ით შეჰვიძლია მივწვდეთ value ს
# pop ით  შეგვიძლია წავშალოთ სასურველი key