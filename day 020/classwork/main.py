# შექმენით სია რომელშიც ჩამოწერთ თქვენთის ნაცნობ პროგრამირების ენებს, უნდა იყოს მინიმუმ 10 ელემენტი, ჯერ დაბეჭდეთ მთლიანად სია, შემდეგ კი მისი ელემენტები ცალცალკე ინდექსის გამოყენებით, კომენტარებით დაწერეთ თუ რა არის ინდექსი თქვენი აზრით

languages=["python", "CSS" , "JavaScript", "C+", "C++"]
#index =      0        1           2         3      4   ,index არის ელემენტების პოზიცია საიში
print(languages)

programireba1 = languages[0]
programireba2 = languages[1]
programireba3 = languages[2]
programireba4 = languages[3]
programireba5 = languages[4]

print(programireba1)
print(programireba2)
print(programireba3)
print(programireba4)
print(programireba5)

cold_drinks = ["redbull", "max", "fanta", "cola", "boom", "energy", "water"]

index = int(input("Enter index: "))


print(cold_drinks[index])

new_drink = input("Enter new drinks name: ")

cold_drinks[1] = new_drink


print( cold_drinks)






numbers = [21, 24, 43, 88, 32, 42, 26, 32, 99, 65]


for i in range(10):
    if i != 4: 
        numbers[i] += 1
print( numbers)

