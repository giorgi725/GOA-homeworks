#2) შექმენით კლასი Animal, რომელსაც ექნება ატრიბუტები name და age. დაამატეთ მეთოდი speak(), რომელიც დაბეჭდავს "ცხოველი ხმას გამოსცემს"

class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self):
        print("ცხოველი ხმას გამოსცემს")

dog = Animal("bob", 32)
dog.speak()

#3) შექმენით კლასი Car, რომელსაც ექნება brand და speed. დაამატეთ მეთოდი accelerate(), რომელიც speed-ს გაზრდის 10-ით

class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed

    def accelerate(self):
        self.speed += 10

car1 = Car("MAZDA", 220)
print(car1.speed)   
car1.accelerate()
print(car1.speed) 

#4) შექმენით კლასი User, რომელსაც ექნება username და email. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს მომხმარებლის მონაცემებს ერთ ხაზზე

class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

    def info(self):
        print(f"მომხმარებლის სახელი {self.username}  და მომხმარებლის ემაილი:{self.email}")

person = User("giorgi", "fake@gmail.com")
person.info()


#5) შექმენით კლასი Counter, რომელსაც ექნება class variable count. ყოველ ახალ ობიექტზე count უნდა გაიზარდოს 1-ით

class Counter:
    count = 0
    def __init__(self,):
        Counter.count += 1

counter1 = Counter()

#6) შექმენით კლასი Rectangle, რომელსაც ექნება width და height. დაამატეთ მეთოდი area(), რომელიც დააბრუნებს ფართობს

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        print(self.width * self.height)

p1 = Rectangle(20, 30)
p1.area()

#7) შექმენით კლასი Person, რომელსაც ექნება name და balance. დაამატეთ მეთოდი spend(amount), რომელიც თანხას გამოაკლებს balance-ს თუ საკმარისია

class Person:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def spend(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"{self.name} დახარჯა {amount}. დარჩა:{self.balance}")
        else:
            print("არასაკმარისი თანხა")

p1 = Person("giorgi", 1000)
p1.spend(900) 


#8) შექმენით კლასი Logger, რომელსაც ექნება მეთოდი log(message), რომელიც დაბეჭდავს "LOG: message"

class Logger:
    def log(self, message):
        print(f"LOG: {message}")

logger = Logger()
logger.log("something")

#9) შექმენით კლასი Employee, რომელსაც ექნება name და salary. დაამატეთ მეთოდი raise_salary(percent), რომელიც salary-ს გაზრდის პროცენტულად

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def raise_salary(self, percent):
        self.salary += self.salary * percent

p1 = Employee("გიორგი", 2000)

p1.raise_salary(10)
print(p1.salary)   

#10) შექმენით კლასი Team, რომელსაც ექნება players სია. დაამატეთ მეთოდი add_player(name), რომელიც სიაში დაამატებს მოთამაშეს

class Team:
    def __init__(self):
        self.players = []

    def add_player(self, name):
        self.players.append(name)

team = Team()
team.add_player("giorgi")
team.add_player("nugzar")

print(team.players)

#11) შექმენით კლასი Book, რომელსაც ექნება title და pages. დაამატეთ მეთოდი is_long(), რომელიც დააბრუნებს True თუ pages > 300

class Book:
    def __init__(self, title, pages):
        self.title = title
        self.page = pages
    
    def is_long(self):
        if self.page > 300:
            return True
        else:
            return False

p1 = Book("harry poeter", 500)
print(p1.is_long()) 
p2= Book("racxa", 299)
print(p2.is_long())

#12) შექმენით კლასი Account, რომელსაც ექნება owner და balance. დაამატეთ მეთოდი transfer(other, amount), რომელიც თანხას გადაიტანს სხვა ობიექტზე

class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def transfer(self, other, amount):
        if self.balance >= amount:
            self.balance -= amount
            other.balance += amount
            print(f"{amount} გადაირიცხა {other.owner}-ზე")
        else:
            print("არასაკმარისი თანხა")

acc1 = Account("giorgi", 500)
acc2 = Account("nika", 200)

acc1.transfer(acc2, 150)

#13) შექმენით კლასი Student, რომელსაც ექნება name და scores (სია). დაამატეთ მეთოდი average(), რომელიც დააბრუნებს საშუალო ქულას

class Student:
    def __init__(self, name, scores):
        self.name = name
        self.scores = scores

    def average(self):
        return sum(self.scores) / len(self.scores)

student1 = Student("nika", [90,90,20,29,20])
print(student1.average())  
student2 = Student("ana", [23,34,54,65,75])
print(student2.average())  