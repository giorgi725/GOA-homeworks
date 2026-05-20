# 3) შექმენით users.db და Table Users სადაც იქნება Username TEXT, Password TEXT, Balance INT. დაამატეთ 4 user. შემდეგ UPDATE ბრძანებით ერთ user-ს შეუცვალეთ Password. ბოლოს SELECT * FROM Users გამოიყენეთ და დაბეჭდეთ განახლებული შედეგი

import sqlite3

connection = sqlite3.connect("users.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Users (
    Username TEXT,
    Password TEXT,
    Balance INT
)
""")

cursor.executemany("""
INSERT INTO Users (Username, Password, Balance)
VALUES (?, ?, ?)
""", [
    ("gio", "pass123", 500),
    ("nika", "nika456", 1200),
    ("luka", "luka789", 750),
    ("ana", "ana111", 950)
])

cursor.execute("""
UPDATE Users
SET Password = 'newpassword999'
WHERE Username = 'nika'
""")

connection.commit()

cursor.execute("SELECT * FROM Users")

users = cursor.fetchall()

for user in users:
    print(user)

connection.close()
