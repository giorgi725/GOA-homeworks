# 6) მომხმარებელს შემოატანინეთ ქულა score და შეინახეთ ცვლადში, როგორც integer.
# შემდეგ, ქულის მიხედვით განსაზღვრეთ შეფასება (grade):
# A – თუ score მეტია 80-ზე
# B – თუ score მეტია 60-ზე
# C – თუ score მეტია 40-ზე
# D – თუ score მეტია 20-ზე
# F – თუ score 20-ზე ნაკლებია

# ბოლოს, დაბეჭდეთ შესაბამისი grade

score = int(input("enter score: "))
if score >80:
    grade = "A!"
elif score>60:
    grade = "B"
elif score > 40:
    grade = "C"
elif score > 20:
    grade = "D"
else:
    grade = "F"
print("your grade is:",grade)
