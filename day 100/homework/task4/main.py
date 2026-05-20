# 5) შექმენით accounts.db და Table Accounts სადაც იქნება Username TEXT, Email TEXT, Balance INT. დაამატეთ 3 account. შემდეგ ერთი account-ის Balance გაზარდეთ 500-ით UPDATE ბრძანებით. ბოლოს SELECT * FROM Accounts გამოიყენეთ და შეამოწმეთ შეიცვალა თუ არა თანხა

import sqlite3

connection = sqlite3.connect("accounts.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Accounts (
    Username TEXT,
    Email TEXT,
    Balance INT
)
""")

cursor.executemany("""
INSERT INTO Accounts (Username, Email, Balance)
VALUES (?, ?, ?)
""", [
    ("gio", "ber@gmail.com", 1000),
    ("nika", "nierbeka@gmail.com", 1500),
    ("ana", "be@gmail.com", 2000)
])

cursor.execute("""
UPDATE Accounts
SET Balance = Balance + 500
WHERE Username = 'nika'
""")

connection.commit()

cursor.execute("SELECT * FROM Accounts")

accounts = cursor.fetchall()

for account in accounts:
    print(account)

connection.close()