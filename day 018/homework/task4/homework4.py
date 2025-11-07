# 5) მოხმარებელს შემოატანინეთ გამოცდის ქულა და შეინახეთ score ცვლადში ინტეჯერად, თუ ქულა მეტია 70-ზე დაუბეჭდეთ რომ გამოცდა გადალახა "passed" სხვა შემთხვევაში კი რომ ჩაიჭრა "failed"

score = int(input("enter score: "))

if score > 70:
    print("passed")
else:
    print("failed")