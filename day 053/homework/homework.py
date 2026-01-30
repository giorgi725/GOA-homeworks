#2) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის რიცხვებს 'args'-ით და დააბრუნებს მათ ჯამს


def numbers(*args):
    result = 0
    for num in args:
        result += num
    return result

print(numbers(23,432,432,423,23,215,5657,68,532))

#3) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის სტრინგებს 'args'-ით და დააბრუნებს ყველა სტრინგი გაერთიანებულად

def string(*args):
    return ''.join(args)

print("giorgi","zura","dachi","nana","lasha")

#4) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით ადამიანის მონაცემებს (სახელი, ასაკი) და დაბეჭდავს "სახელი: X, ასაკი: Y"

def any(**kwargs):
    name = kwargs.get("name")
    age = kwargs.get("age")
    print(f"name: {name}, age: {age}")

any(name = "X" , age = "Y")

#5) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით მანქანის მონაცემებს და დაბეჭდავს თითოეულ გასაღებს და მნიშვნელობას

def vehicle(**kwargs):
    for key,value in kwargs.items():
        print(f"{key}: {value}")

vehicle(brand = "BMW", year = 2024, color = "black", for_sale = True)

#6) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"

def decorator(func):
    def wrapper():
        print("ფუნქცია დაიწყო")
        func()
        print("ფუნქცია დასრულდა")
    return wrapper

@decorator
def test_function():
    print("ფუნქცია მუშაობს...")

test_function()

#7) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების დროს დაითვლის რამდენი წამი მუშაობდა ფუნქცია


import time

def time_counter(func):
    def wrapper():
        start_time = time.time()
        end_time = time.time() 
        print(f"ფუნქციამ იმუშავა {end_time - start_time:} წამი")
    return wrapper



@time_counter
def example_function():
    time.sleep()
    print("დასრულდა")

example_function()

#8) შექმენით ფუნქცია 'multiply', რომელიც იღებს რიცხვებს 'args'-ით და აბრუნებს მათ ნამრაველს

def multiply(*args):
    res = 1
    for num in args:
        res *= num
    return res

print(multiply(1,2,23,4,35,243,123,3,2,41,23,21))

#9) შექმენით ფუნქცია, რომელიც იღებს 'args'-ით რიცხვებს და აბრუნებს მათ მაქსიმუმს და მინიმუმს

def numbers(*args):
    maximum = max(args)
    minimum = min(args)
    return f"max numbers is {maximum}, min number is {minimum}"

print(numbers(2343,423,432,4,2,435,654,6745,53,432))

#10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად

def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs) 
        if isinstance(result, str):
            return result.upper()
        return result
    return wrapper

@uppercase_decorator
def greet():
    return "hello my friend"

print(greet())

#11) შექმენით კლასი Book, რომელსაც ექნება title, author, pages. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს "სათაური: X, ავტორი: Y, გვერდები: Z"

class book:
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def info(self):
        print(f"title: {self.title}, author: {self.author}, pages: {self.pages}")

book1 = book("X", "Y", "Z")
book1.info()

#12) შექმენით კლასი BankAccount, რომელსაც ექნება balance. დაამატეთ მეთოდი deposit(amount), რომელიც balance-ს თანხას დაუმატებს

class bankAccount:
    def __init__(self,balance):
        self.balance = balance

    def deposit(self,amount):
        self.balance += amount
        print(f"Deposited: {amount}. New balance: {self.balance}")

account = bankAccount(100)
account.deposit(50)

#13) შექმენით კლასი Student, რომელსაც ექნება name და grade. დაამატეთ მეთოდი check_pass(), რომელიც დააბრუნებს True თუ grade ≥ 50, სხვა შემთხვევაში False

class student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def check_pass(self):
        return self.grade >= 50

student1 = student("giorgi", 60)

print(student1.name, "pass:", student1.check_pass())

# 14) შექმენით Fighter კლასი და გაუწერეთ ატრიბუტები health, damage, speed და მეთოდი heal. შემდეგ მისგან მემკვიდრეობით შექმენით 2 კლასი Archer და Mage. დაამატეთ შესაბამისი ატრიბუტები range, reload და spell, mana. შემდეგ ამ კლასებით შექმენით მოცემული ობიექტები და კიდევ რამდენიმე თქვენით მოიფიქრეთ

class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

    def heal(self, amount):
        self.health += amount
        print(f"Fighter healed by {amount}. Health is now {self.health}")


class Archer(Fighter):
    def __init__(self, health, damage, speed, range, reload):
        super().__init__(health, damage, speed)
        self.range = range
        self.reload = reload

    def shoot(self):
        print(f"Archer shoots! Damage: {self.damage}, Range: {self.range}")


class Mage(Fighter):
    def __init__(self, health, damage, speed, spell, mana):
        super().__init__(health, damage, speed)
        self.spell = spell
        self.mana = mana

    def cast_spell(self):
        if self.mana > 0:
            self.mana -= 10
            print(f"Mage casts {self.spell}! Mana left: {self.mana}")
        else:
            print("Not enough mana!")


archer1 = Archer(100, 25, 15, 50, 2)
archer2 = Archer(120, 30, 12, 60, 3)

mage1 = Mage(80, 40, 10, "Fireball", 100)
mage2 = Mage(90, 35, 11, "Ice Blast", 80)

fighter1 = Fighter(150, 20, 8)

archer1.shoot()
archer1.heal(20)

mage1.cast_spell()
mage1.cast_spell()
mage1.heal(15)

fighter1.heal(30)