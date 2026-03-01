// 2) შექმენით class Calculator.
// კლასს უნდა ჰქონდეს ორი public ველი: num1 და num2.
// დაამატეთ მხოლოდ ერთი მარტივი მეთოდი add() რომელიც აბრუნებს ამ ორი რიცხვის ჯამს.

// შექმენით ერთი ობიექტი და გამოიძახეთ მეთოდი.
// (მხოლოდ ჩვეულებრივი method – არ გამოიყენოთ static, getter, setter ან private)

class Calculator {
    num1;
    num2
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
    add() {
        return this.num1 + this.num2
    }
}
const calc = new Calculator(10, 5);
console.log(calc.add())

// 3) შექმენით class Counter.
// კლასს უნდა ჰქონდეს static ცვლადი totalCount რომელიც ითვლის რამდენი ობიექტი შეიქმნა.
// constructor-ში გაზარდეთ ეს რიცხვი.

// დაამატეთ static მეთოდი getTotalCount() რომელიც აბრუნებს ობიექტების რაოდენობას.

// შექმენით მინიმუმ 3 ობიექტი და დაბეჭდეთ რაოდენობა.
// (მხოლოდ static-ზე კონცენტრაცია)

class Counter {
    static totalCount = 0;
    constructor() {
    Counter.totalCount++;
}
    static getTotalCount() {
        return Counter.totalCount;
    }
}
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.getTotalCount());

// 4) შექმენით class BankAccount.
// კლასს უნდა ჰქონდეს private ველი #balance.
// constructor-ში მიიღოს owner და balance.

// დაამატეთ მეთოდი deposit(amount) რომელიც ზრდის ბალანსს.

// ცადეთ გარედან #balance-ზე წვდომა და დააკვირდით შეცდომას.
// (მხოლოდ private ველზე კონცენტრაცია – არ გამოიყენოთ getter/setter)

class BankAccount {
    #balance
    constructor(owner, balance) {
        this.owner = owner
        this.#balance = balance
    }
    deposit(amount) {
        this.#balance += amount
        return this.#balance;
    }
}
const bank = new BankAccount("gio", 1000)
console.log(bank.deposit(50)); // 1050
// console.log(account.#balance); error

// 5) შექმენით class User.
// კლასს უნდა ჰქონდეს private ველი #password.
// constructor-ში მიიღოს username და password.

// დაამატეთ getter password რომელიც აბრუნებს პაროლს ტექსტით:
// "User password is: ...."

// შექმენით ობიექტი და დაბეჭდეთ პაროლი getter-ის საშუალებით.
// (მხოლოდ getter)

class User {
    #password
    constructor(username, password) {
        this.username = username
        this.#password = password
    }
    get password() {
        return `User password is ${this.#password}`
    }
}
const user = new User("giorgi", "gio12345")
console.log(user.password())


// 6) შექმენით class Product.
// კლასს უნდა ჰქონდეს private ველი #price.
// constructor-ში მიიღოს name და price.

// დაამატეთ setter price(newPrice) რომელიც:
// - თუ newPrice < 0 → დაბეჭდოს "Price must be positive"
// - სხვა შემთხვევაში შეცვალოს ფასი

// შექმენით ობიექტი და სცადეთ უარყოფითი და სწორი მნიშვნელობის მინიჭება.
// (მხოლოდ setter)

class Product{
    #price
    constructor(name,price) {
        this.name = name
        this.#price = price
    }
    set price(newPrice) {
    if (newPrice < 0) {
        console.log("Price must be positive");
    } else {
        this.#price = newPrice;
        console.log("New price is:", this.#price);
    }
    }
}
const prodeuct1 = new Product("banana", 1000)
product1.price = -500; 
product1.price = 1200; 


// 7) შექმენით class Vehicle.
// ქონდეს public ველი brand და მეთოდი info() რომელიც აბრუნებს:
// "This vehicle brand is ..."

// შექმენით class Car რომელიც იღებს მემკვიდრეობას Vehicle-სგან.
// დაამატეთ fuelType ველი და override გააკეთეთ info() მეთოდზე
// რომ დააბრუნოს:
// "This car brand is ... and fuel type is ..."

// შექმენით ერთი Car ობიექტი და გამოიძახეთ info().
// (მემკვიდრეობა + override)

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    info() {
        return `This vehicle brand is ${this.brand}`;
    }
}

class Car extends Vehicle {
    constructor(brand, fuelType) {
        super(brand); 
        this.fuelType = fuelType;
}
    info() {
        return `This car brand is ${this.brand} and fuel type is ${this.fuelType}`;
    }
}
const myCar = new Car("Toyota", "Sokar");
console.log(myCar.info());


// 8) შექმენით class Student.
// ქონდეს public ველები name და grade.
// ქონდეს static მეთოდი compareStudents(student1, student2)
// რომელიც აბრუნებს იმ სტუდენტის სახელს ვისაც უფრო მაღალი ქულა აქვს.

// შექმენით ორი სტუდენტი და შეადარეთ.
// (მემკვიდრეობა არ არის – static method გამოყენება)

class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    static compareStudents(student1, student2){
        if (student1.grade > student2.grade) {
            return student1.name
        } else if (student1.grade > student2.grade) {
            return student2.name
        } else {
        return "Both students have equal grades";
        }
    } 
}
const student1 = new Student("gio",10)
const student2 = new Student("nika",9)
console.log(Student.compareStudents(student1, student2));


// 9) შექმენით class Employee.
// ქონდეს:
// - public ველი name
// - private ველი #salary
// - getter salary რომელიც აბრუნებს ხელფასს
// - setter salary(newSalary) რომელიც არ დაუშვებს უარყოფით მნიშვნელობას

// დაამატეთ static ცვლადი employeesCount რომელიც ითვლის თანამშრომლებს.

// შექმენით 2 თანამშრომელი და:
// - დაბეჭდეთ salary getter-ით
// - შეცვალეთ salary setter-ით
// - დაბეჭდეთ employeesCount
// (გაერთიანება: private + getter + setter + static)

class Employee {
    static EmployeeCount = 0
    #salary
    constructor(name, salary) {
        this.name = name
        this.#salary = salary
        Employee.EmployeeCount++
    }
    get salary() {
        return this.#salary
    }
    set salary(newSalary) {
        if (this.salary < 0) {
            return `Salary should be positive`
        }
    }
}
const worker1 = new Employee("gio", 1000)
const worker2 = new Employee("zura", 500)
console.log(worker1.salary)
console.log(worker2.salary)

emp1.salary = 3000; 
console.log(emp1.salary); 
emp2.salary = -500; 
console.log(Employee.EmployeeCount);


// 10) შექმენით სრული User Registration სისტემა class Account-ით.

// კლასს უნდა ჰქონდეს:
// - public ველები: firstName, lastName
// - private ველი: #age
// - private ველი: #password
// - static ცვლადი totalAccounts

// constructor-ში:
// - შეამოწმეთ age > 17
// - password მინიმუმ 6 სიმბოლო იყოს
// - თუ არასწორია → დაბეჭდეთ შეცდომა

// დაამატეთ:
// - getter age
// - setter age (ვალიდაციით)
// - static მეთოდი getTotalAccounts()

// შექმენით მინიმუმ 2 სწორი და 1 არასწორი ობიექტი.
// (სრული OOP: public + private + getter + setter + static + validation)

class Account {
    #age
    #password
    static totalaccount = 0
    constructor (Firstname, lastname, age, password) {
        this.Firstname = Firstname
        this.lastname = lastname
        if (age <= 17) {
            console.log("Error: Age must be over 17");
            return;
        }
        if (password.length < 6) {
            console.log("Error: Password must be at least 6 characters");
            return;
        }
        this.#age = age
        this.#password = password
        Account.totalaccount++
    }
    get age() {
        return this.#age;
    }
    set age(newAge) {
        if (newAge <= 17) {
            console.log("Age must be over 17");
        } else {
            this.#age = newAge;
        }
    }
    static getTotalAccounts() {
        return Account.totalaccount;
    }
}

const acc1 = new Account("Giorgi", "Megreli", 22, "23few");
const acc2 = new Account("Nika", "jajanidze", 19, "abcdf3ef");
const acc3 = new Account("Luka", "pavliashvili", 15, "1f23");

console.log(acc1.age); 

acc1.age = 25;
console.log(acc1.age); 

acc1.age = 10; 
console.log(Account.getTotalAccounts());

// 11) კომენტარებით ახსენით javascript კლასების საკითხები

// Methods - ფუნქციები, რომლებიც კლასის შიგნით არიან იძახება ობიექტის სახელით: obj.method().მაგ:class Person { greet() { return "Hi"; } }
// Getter - property-ის წაკითხვა private ველზე. იძახება როგორც property: obj.prop, არა obj.prop(). მაგ:get password() { return this.#password; }
// Setter - property-ის შეცვლა ვალიდაციით.იძახება როგორც property: obj.prop = value. მაგ:set price(value) { if(value>0) this.#price=value; }
// Static - ეკუთვნის კლასს, არა ობიექტს.იძახება: ClassName.method() ან ClassName.prop. მაგ:static count = 0; static getCount() { return ClassName.count; }
// Private property (#) - დაცვისთვის კლასის შიგნით.კლასის გარედან მიუწვდომელია.მაგ:#balance;deposit(amount) { this.#balance += amount; }