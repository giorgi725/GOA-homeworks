// 2) შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი, დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 2 კუთვნილება, პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)
let numbers = [];

for (let i = 0; i <= 10; i++) {
    let obj = {
        value: i,
        type: i % 2 === 0
    };
    numbers.push(obj);
}
console.log(numbers);

// 3) შექმენით student ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: name, age, grade, active, promote (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ promote მეთოდი, საბოლოოდ გამოიტანეთ ყველა ობიექტი, კომენტარით ახსენით რა არის მეთოდი და რა განსხვავებაა property-სა და method-ს შორის

function Student(name, age, grade, active) {
    this.name = name;      
    this.age = age;   
    this.grade = grade;    
    this.active = active;   

    this.promote = function() {
        this.grade += 1;
        console.log(this.name + " გადავიდა შემდეგ კლასში:ეხლა " + this.grade + " კლასშია");
    };
}

let student1 = new Student("Giorgi", 15, 9, true);
let student2 = new Student("Nino", 14, 8, true);
let student3 = new Student("Luka", 16, 10, false);

student1.promote();
student2.promote(); 
student3.promote(); 

console.log(student1);
console.log(student2);
console.log(student3);


// 4) შექმენით book ობიექტის კონსტრუქტორი რომელსაც ექნება 4 კუთვნილება: title, author, year, available, toggleAvailability (მეთოდი), შექმენით მინიმუმ 2 ობიექტი და შეამოწმეთ მეთოდის მუშაობა, კომენტარით ახსენით რა არის constructor და რისთვის გამოიყენება

function Book(title, author, year, available) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;

    this.toggleAvailability = function() {
        this.available = !this.available;
        console.log(this.title + " ხელმისაწვდომობა: " + this.available);
    };
}
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, true);
let book2 = new Book("1984", "George Orwell", 1949, false);

book1.toggleAvailability();
book2.toggleAvailability();

console.log(book1);
console.log(book2);

// 5) შექმენით car ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: brand, model, year, mileage, drive (მეთოდი), drive მეთოდმა უნდა გაზარდოს mileage 100-ით ყოველი გამოძახებისას, შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ drive მეთოდი ორჯერ, კომენტარით ახსენით რა არის ობიექტი და როგორ იქმნება ის კონსტრუქტორით

function Car(brand, model, year, mileage) {
    this.brand = brand
    this.model = model
    this.year = year
    this.mileage = mileage

    this.drive = function() {
        this.mileage += 100;
    }
}

let car1 = new Car("Toyota", "Corolla", 2018, 50000);
let car2 = new Car("Honda", "Civic", 2020, 30000);
let car3 = new Car("Ford", "Mustang", 2017, 75000);

car1.drive(); 
car1.drive(); 
car2.drive();
car2.drive();
car3.drive();
car3.drive();

console.log(car1);
console.log(car2);
console.log(car3);


// 6) შექმენით employee ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: name, position, salary, active, raiseSalary (მეთოდი), შექმენით მასივი employees და დაამატეთ მინიმუმ 3 ობიექტი, შემდეგ for ციკლში ყველა ობიექტზე გამოიძახეთ raiseSalary მეთოდი, საბოლოოდ გამოიტანეთ ყველა ობიექტი, კომენტარით ახსენით რა არის ობიექტების მასივი და როგორ მუშაობს for ციკლი მასთან

function Employee(name, position, salary, active) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.active = active;

    this.raisesalary = function(amount = 500) {
        this.salary += amount;
    }
}
let employee1 = new Employee("Giorgi", "Developer", 2000, true);
let employee2 = new Employee("Nika", "Designer", 1800, true);
let employee3 = new Employee("Luka", "Manager", 2500, false);

let employees = [employee1, employee2, employee3];

for (let i = 0; i < employees.length; i++) {
    employees[i].raiseSalary(); 
}
console.log(employees);

// 7) შექმენით task ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: title, desc, state, deadline, complete (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ complete მეთოდი, საბოლოოდ გამოიტანეთ ყველა, კომენტარებით ახსენით რა არის ობიექტი და ჩამოწერეთ მისი 3-ვე ტიპის თვისება

function Task(title, desc, state, deadline) {
    this.title = title;
    this.desc = desc;
    this.state = state;
    this.deadline = deadline;

    this.complete = function() {
        this.state = "completed";
    };
}

let task1 = new Task("th", "dsfsd", "pecs", "234-324-23");
let task2 = new Task("sdf", "sdf", "vd", "4233-45-64");
let task3 = new Task("fwsd", "sdcf", "csdb", "234-54-65");

task2.complete();
task3.complete();

console.log(task1);
console.log(task2);
console.log(task3);

// 8) for ციკლის მეშვეობით გადაუარეთ რიცხვებს 1-იდან 10-მდე, თითოეული რიცხვისთვის ობიექტის კონსტრუქტორით (აიღეთ კონსტრუქტორი for ციკლის გაშვებამდე) შექმენით ობიექტი რომელსაც ექნება 2 კუთვნილება რიცხვი და even (ან ლუწია თუ კენტი) თუ რიცხვი ლუწი იქნება მაშინ even კუთვნილების მნიშვნელობა უნდა იყოს true ხოლო სხვა შემთხვევაში false, ეს ყველა ობიექტი უნდა დაამატოთ nubmers მასივში

function NumberObject(value) {
    this.value = value;              
    this.even = value % 2 === 0;        
}

let number = [];

for (let i = 1; i <= 10; i++) {
    let numObj = new NumberObject(i);
    number.push(numObj);          
}

console.log(number);