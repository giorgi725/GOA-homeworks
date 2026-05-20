# 2) შექმენით database students.db და Table Students სადაც იქნება Name TEXT, Email TEXT, Score INT. დაამატეთ მინიმუმ 5 სტუდენტი INSERT INTO ბრძანებით. ბოლოს SELECT * FROM Students გამოიყენეთ და for loop-ით დაბეჭდეთ ყველა სტუდენტი. კომენტარებში ახსენით რას აკეთებს connection და cursor

import sqlite3

connection = sqlite3.connect("students.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Students (
    Name TEXT,
    Email TEXT,
    Score INT
)
""")

cursor.executemany("""
INSERT INTO Students (Name, Email, Score)
VALUES (?, ?, ?)
""", [
    ("Giorgi", "gibreeorgi@gmail.com", 95),
    ("Nika", "bre@gmail.com", 88),
    ("Luka", "lbreuka@gmail.com", 76),
    ("Ana", "ber@gmail.com", 91),
    ("zura", "vsdr@gmail.com", 85)
])

connection.commit()

cursor.execute("SELECT * FROM Students")

students = cursor.fetchall()

for student in students:
    print(student)

connection.close()

# კომენტარები:
# connection:
# connection ქმნის კავშირს Python-სა და SQLite database-ს შორის.

# cursor:
# cursor გამოიყენება SQL ბრძანებების შესასრულებლად.