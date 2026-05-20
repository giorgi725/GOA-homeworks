# 9) შექმენით library.db და Table Books სადაც იქნება ID INTEGER PRIMARY KEY, Title TEXT, Author TEXT, Year INT. შექმენით ფუნქცია add_book(title, author, year), რომელიც INSERT INTO ბრძანებით დაამატებს ახალ წიგნს ბაზაში. ფუნქციის გამოყენებით დაამატეთ მინიმუმ 4 წიგნი. შემდეგ SELECT * FROM Books WHERE Year > 2015 გამოიყენეთ და დაბეჭდეთ მხოლოდ 2015 წლის შემდეგ გამოშვებული წიგნები

import sqlite3

# library.db database-სთან კავშირის შექმნა
connection = sqlite3.connect("library.db")

# cursor SQL ბრძანებების შესასრულებლად
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Books (
    ID INTEGER PRIMARY KEY,
    Title TEXT,
    Author TEXT,
    Year INT
)
""")

def add_book(title, author, year):
    cursor.execute("""
    INSERT INTO Books (Title, Author, Year)
    VALUES (?, ?, ?)
    """, (title, author, year))
    connection.commit()

add_book("Atomic Habits", "James Clear", 2018)
add_book("Clean Code", "Robert Martin", 2008)
add_book("Python Crash Course", "Eric Matthes", 2019)
add_book("The Midnight Library", "Matt Haig", 2020)

cursor.execute("""
SELECT * FROM Books
WHERE Year > 2015
""")

books = cursor.fetchall()

for book in books:
    print(book)

connection.close()