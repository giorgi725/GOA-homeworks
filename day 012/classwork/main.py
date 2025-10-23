#1) and, or და not ლოგიკურ ოპერაციების ყველა შემავალი True/False მნიშვნლობებების კომბინაცები აიღეთ და დაბეჭდეთ, თითოეულს გვერდზე კომენტარით მიუწერეთ ოპერაციის შედეგი

print(True or False) #True
print(True or True) #True
print(False or False) #False
print(False or True) #True


print(True and False) # false
print(True and True) # true
print(False and False) # false
print(False and True) # false

print (not True) # False
print(not False) # True


#2) for ციკლისა და range-ის გამოყენებით გამოიტანეთ 0-იდან 20-მდე რიცხვები

for num in range(20):
    print(num)


#3) for და range-ის გამოყენებით გამოიტანეთ შემდეგი რიცხვების მიმდევრობები:


for num in range(0, 20, 2):
    print(num)

for num in range(30, 4, -1):
    print(num)

for num in range(25, 40 ,2):
    print(num)