#12) გამოიყენეთ with context manager ფაილ "info.txt"-ზე ჩასაწერად. ჩაწერეთ მინიმუმ 3 სტრიქონი ტექსტი და დარწმუნდით, რომ ფაილი ავტომატურად იხურება

with open("info.txt", "w") as file:
    file.write("pirveli\n")
    file.write("meore\n")
    file.write("mesame\n")