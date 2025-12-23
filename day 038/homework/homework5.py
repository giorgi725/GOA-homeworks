# 6) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem() მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები

def update_and_remove(person):
    person.update({"age": 14})
    removed_item =person.popitem()
    print(removed_item)
    print(person)

person = {
    "name": "gio",
    "hobby" : "codding",
    "height" : "176",
    "weight" : "322",
    "age": 16,
}

update_and_remove(person)
