# 10) შექმენით სრული database bank.db. ბაზაში შექმენით Table Users სადაც იქნება ID INTEGER PRIMARY KEY, Username TEXT, Email TEXT, Balance INT და Table Transactions სადაც იქნება ID INTEGER PRIMARY KEY, UserID INT, Amount INT, Type TEXT. Users ცხრილში executemany()-ით დაამატეთ მინიმუმ 4 user. Transactions ცხრილში დაამატეთ რამდენიმე ტრანზაქცია, მაგალითად deposit და withdraw. შემდეგ UPDATE ბრძანებით ერთ user-ს Balance შეუცვალეთ ტრანზაქციის მიხედვით, DELETE ბრძანებით წაშალეთ ერთი ტრანზაქცია და ბოლოს SELECT ბრძანებებით დაბეჭდეთ Users და Transactions ცხრილების საბოლოო მდგომარეობა. კომენტარებში ახსენით რას აკეთებს connection, cursor, commit() და close()

import sqlite3

connection = sqlite3.connect("bank.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Users (
    ID INTEGER PRIMARY KEY,
    Username TEXT,
    Email TEXT,
    Balance INT
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS Transactions (
    ID INTEGER PRIMARY KEY,
    UserID INT,
    Amount INT,
    Type TEXT
)
""")

cursor.executemany("""
INSERT INTO Users (Username, Email, Balance)
VALUES (?, ?, ?)
""", [
    ("gio", "gio@gmail.com", 1000),
    ("nika", "nika@gmail.com", 1500),
    ("ana", "ana@gmail.com", 2000),
    ("luka", "luka@gmail.com", 1200)
])

cursor.executemany("""
INSERT INTO Transactions (UserID, Amount, Type)
VALUES (?, ?, ?)
""", [
    (1, 500, "deposit"),
    (2, 300, "withdraw"),
    (3, 700, "deposit"),
    (1, 200, "withdraw")
])

cursor.execute("""
UPDATE Users
SET Balance = Balance + 500
WHERE ID = 1
""")

cursor.execute("""
DELETE FROM Transactions
WHERE ID = 2
""")

connection.commit()

print("Users Table:")
cursor.execute("SELECT * FROM Users")

users = cursor.fetchall()

for user in users:
    print(user)

print("\nTransactions Table:")
cursor.execute("SELECT * FROM Transactions")

transactions = cursor.fetchall()

for transaction in transactions:
    print(transaction)

connection.close()


# connection:
# connection ქმნის კავშირს Python-სა და SQLite database-ს შორის.

# cursor:
# cursor გამოიყენება SQL ბრძანებების შესასრულებლად.

# commit():
# commit() ინახავს database-ში განხორციელებულ ცვლილებებს.

# close():
# close() ხურავს database-სთან კავშირს.