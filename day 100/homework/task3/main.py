# 4) შექმენით shop.db და Table Products სადაც იქნება ProductName TEXT, Price INT, Quantity INT. დაამატეთ მინიმუმ 5 პროდუქტი. შემდეგ DELETE ბრძანებით წაშალეთ ერთი კონკრეტული პროდუქტი ProductName-ის მიხედვით. ბოლოს გამოიტანეთ რა დარჩა ცხრილში

import sqlite3

connection = sqlite3.connect("shop.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Products (
    ProductName TEXT,
    Price INT,
    Quantity INT
)
""")
cursor.executemany("""
INSERT INTO Products (ProductName, Price, Quantity)
VALUES (?, ?, ?)
""", [
    ("Laptop", 2500, 5),
    ("Phone", 1200, 10),
    ("Keyboard", 150, 20),
    ("Mouse", 80, 15),
    ("Monitor", 700, 7)
])

cursor.execute("""
DELETE FROM Products
WHERE ProductName = 'Mouse'
""")

connection.commit()

cursor.execute("SELECT * FROM Products")

products = cursor.fetchall()

for product in products:
    print(product)

connection.close()