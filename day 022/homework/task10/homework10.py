# 11) შექმენით სიტყვების სია, შემდეგ მის შემობრუნებულ ვერსიას გადაუარეთ for ციკლით, დაბეჭდეთ ყოველი მეორე ელემენტი (რომ გაიგოთ ყოველი მეორე აიღეთ ცვლადი რომელიც თავიდან 0 იქნება, ყოველ გამეორებაზე კი გაზრდით ერთით და შეამოწმეთ ლუწია თუ კენტი)

words = ["alma", "banani", "cherry", "date", "elderberry", "fig", "grape"]

reversed_words = words[::-1]  

index = 0
for word in reversed_words:
    if index % 2 == 0: 
        print(word)
    index += 1
