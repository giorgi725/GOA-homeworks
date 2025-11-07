score = int(input("Enter students score: "))
if score  > 50:
    print("grade A!")
else:
    print("grade B!")


score = int(input("enter score: "))
if score >90:
    print("A!")
elif score>80:
    print("B")
elif score > 70:
    print("C")
elif score > 60:
    print("D")
elif score > 50:
    print("E")
else:
    print("F")



# 3) for ციკლით განიხილეთ რიცხვები 30-იდან 60-მდე და დაბეჭდეთ ყველა გარდა 50-ისა (ამისთვის შეამოწმეთ რიცხვი ხომ არ უდრის 50-ს და თუ უდრის continue მეშვეობით გამოტვეთ ეს იტერაცია ანუ გამეეორება) ხოლო თუ რიცხვი უდრის 55-ს მაშინ შეწყვიეთ ციკლი (if-ით შეამომწეთ და გამოიყენეთ break keyword) 
for num in range(30,60):
    if num == 50:
        continue
    if num == 55:
        break
    print(num)