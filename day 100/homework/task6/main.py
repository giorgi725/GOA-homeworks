# 7) შექმენით contacts.db და Table Contacts სადაც იქნება Name TEXT, Phone TEXT, Email TEXT. დაამატეთ მინიმუმ 5 კონტაქტი. შემდეგ ერთ კონტაქტს შეუცვალეთ Phone ნომერი და ერთი კონტაქტი წაშალეთ DELETE ბრძანებით. ბოლოს SELECT * FROM Contacts გამოიყენეთ და დაბეჭდეთ დარჩენილი კონტაქტები

import sqlite3

connection = sqlite3.connect("contacts.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Contacts (
    Name TEXT,
    Phone TEXT,
    Email TEXT
)
""")

cursor.executemany("""
INSERT INTO Contacts (Name, Phone, Email)
VALUES (?, ?, ?)
""", [
    ("Giorgi", "555111222", "defev@gmail.com"),
    ("Nika", "555333444", "nikbrtbtra@gmail.com"),
    ("Ana", "555555666", "rb@gmail.com"),
    ("Luka", "555777888", " sdd@gmail.com"),
    ("Mariam", "555999000", " d@gmail.com")
])

cursor.execute("""
UPDATE Contacts
SET Phone = '599123456'
WHERE Name = 'Nika'
""")

cursor.execute("""
DELETE FROM Contacts
WHERE Name = 'Luka'
""")

connection.commit()

cursor.execute("SELECT * FROM Contacts")

contacts = cursor.fetchall()

for contact in contacts:
    print(contact)

connection.close()