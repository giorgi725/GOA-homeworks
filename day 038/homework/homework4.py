# 5) შექმენით ლექსიკონი animal, შექმენით მისი ასლი .copy() მეთოდით, შემდეგ კი გამოიყენეთ .clear() ორივეზე (დასაწყისში და ბოლოს დაბეჭდეთ ორივე ლექსიკონი, კომენტარით)

animal = {
    "type": "Dog",
    "name": "Buddy",
    "age": 3
}

animal_copy = animal.copy()
print(animal_copy)

print(animal.clear())
print(animal_copy.clear())