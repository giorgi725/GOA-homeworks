# 4) შექმენით ლექსიკონი person და გამოიყენეთ .items() მეთოდი, რათა დაბეჭდოთ ყველა key და value წყვილად. გამოიყენეთ loop და კომენტარი დაუმატეთ შედეგს

person = {
    "name": "gio",
    "hobby" : "codding",
    "height" : "176",
    "weight" : "121",
}

for key, value in person.items():
    print(key, ":", value)