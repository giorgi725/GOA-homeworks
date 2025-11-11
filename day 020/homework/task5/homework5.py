# 6) მომხმარებლებს შეაყვანინეთ ინდექსი და ახალი ფერი, შეცვალეთ ამ ინდექსზე არსებული ფერი სიაში colors = [თეთრი, შავი, ნარინჯისფერი, ვარდისფერი] და დაბეჭდეთ განახლებული სია

color = ["white", "black", "orange", "pink"]
#index =    0       1         2        3          

index = int(input("Enter an index (0 to 3): "))
new_color = input("Enter color: ")

color[index]=new_color

print(color)