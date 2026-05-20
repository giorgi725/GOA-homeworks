# 8) შექმენით employees.db და Table Employees სადაც იქნება ID INTEGER PRIMARY KEY, Name TEXT, Position TEXT, Salary INT. გამოიყენეთ executemany() და ერთდროულად დაამატეთ მინიმუმ 5 თანამშრომელი. შემდეგ SELECT * FROM Employees გამოიყენეთ და fetchall()-ით დაბეჭდეთ ყველა თანამშრომელი. კომენტარებში ახსენით რა განსხვავებაა execute() და executemany() შორის

import sqlite3

connection = sqlite3.connect("employees.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Employees (
    ID INTEGER PRIMARY KEY,
    Name TEXT,
    Position TEXT,
    Salary INT
)
""")

cursor.executemany("""
INSERT INTO Employees (Name, Position, Salary)
VALUES (?, ?, ?)
""", [
    ("Giorgi", "Manager", 3000),
    ("Nika", "Developer", 2500),
    ("Ana", "Designer", 2200),
    ("Luka", "Tester", 1800),
    ("Mariam", "HR", 2000)
])

connection.commit()

cursor.execute("SELECT * FROM Employees")

employees = cursor.fetchall()

for employee in employees:
    print(employee)

connection.close()

# execute():
# execute გამოიყენება ერთი SQL ბრძანების შესასრულებლად.

# executemany():
# executemany გამოიყენება ერთი და იგივე SQL ბრძანების
# მრავალჯერ შესასრულებლად სხვადასხვა მონაცემებზე.