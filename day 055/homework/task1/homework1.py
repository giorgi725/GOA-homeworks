# 2) შექმენით კლასი MathUtils. დაამატეთ staticmethod add(a, b), რომელიც დააბრუნებს ორი რიცხვის ჯამს

class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b

result = MathUtils.add(32,432)
print(result)

# 3) შექმენით კლასი UserCounter, რომელსაც ექნება class variable total_users. დაამატეთ classmethod create_user(), რომელიც გაზრდის total_users-ს 1-ით

class UserCounter:
    total_users = 0  

    @classmethod
    def create_user(cls):
        cls.total_users += 1

UserCounter.create_user()
print(UserCounter.total_users)

# 4) შექმენით კლასი BankAccount, რომელსაც ექნება protected ატრიბუტი _balance. დაამატეთ მეთოდი show_balance(), რომელიც დაბეჭდავს ბალანსს

class BankAccount:
    def __init__(self, balance):
        self._balance = balance 

    def show_balance(self):
        print(f"Balance: {self._balance}")

account = BankAccount(1500)
account.show_balance()

# 5) შექმენით კლასი SecureData, რომელსაც ექნება private ატრიბუტი __password. დაამატეთ მეთოდი check_password(pwd), რომელიც შეამოწმებს სწორია თუ არა

class SecureData:
    def __init__(self, password):
        self.__password = password

    def check_password(self, pwd):
        return self.__password == pwd

data = SecureData("1234")

print(data.check_password("1234")) 
print(data.check_password("2343"))

# 6) შექმენით კლასი Temperature. დაამატეთ staticmethod celsius_to_fahrenheit(c), რომელიც ცელსიუსს ფარენჰეიტში გადაიყვანს

class Temperature:
    
    @staticmethod
    def celsius_to_fahrenheit(c):
        return c * 9 / 5 + 32

print(Temperature.celsius_to_fahrenheit(0))  
print(Temperature.celsius_to_fahrenheit(25))

# 7) შექმენით Student კლასი, რომელსაც ექნება protected ატრიბუტი _grade და private ატრიბუტი __id. დაამატეთ კლასის მეთოდი, რომელიც დაითვლის რამდენი სტუდენტი შეიქმნა ამ კლასიდან. კომენტარებით განმარტეთ protected და private ატრიბუტების დანიშნულება

class Student:
    total_students = 0
    def __init__(self, grade, id):
        self._grade = grade
        self.__id = id
        Student.total_students += 1

    @classmethod
    def get_total_students(cls):
        return cls.total_students

s1 = Student(90, 101)
s2 = Student(75, 102)

print(Student.get_total_students())

# 8) შექმენით Library კლასი, რომელსაც ექნება protected ატრიბუტი _books და private ატრიბუტი __secretCode. დაამატეთ სტატიკური მეთოდი, რომელიც დააბრუნებს წიგნის დაგვიანების ჯარიმის გამოთვლილ მნიშვნელობას. კომენტარებით მიუთითეთ კლასისა და სტატიკური მეთოდის განსხვავება

class Library:
    def __init__(self, books, secretcode):
        self._books = books
        self.__secretcode = secretcode

    @staticmethod
    def calculate_fine(days_late, fine_per_day):
        return days_late * fine_per_day

library = Library(["Book A", "Book B"], "XYZ123")

fine = Library.calculate_fine(5, 2)
print(fine)  

# 