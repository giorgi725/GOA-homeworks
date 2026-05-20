# 6) შექმენით notes.db და Table Notes სადაც იქნება Title TEXT და Content TEXT. დაამატეთ 3 ჩანაწერი. შემდეგ ერთ ჩანაწერს შეუცვალეთ Content UPDATE ბრძანებით Title-ის მიხედვით. ბოლოს fetchall() გამოიყენეთ და დაბეჭდეთ საბოლოო ცხრილი

import sqlite3

connection = sqlite3.connect("notes.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Notes (
    Title TEXT,
    Content TEXT
)
""")

cursor.executemany("""
INSERT INTO Notes (Title, Content)
VALUES (?, ?)
""", [
    ("Shopping", "Buy milk and bread"),
    ("Homework", "Finish Python exercises"),
    ("Meeting", "Team meeting at 5 PM")
])

cursor.execute("""
UPDATE Notes
SET Content = 'Finish SQLite and Python homework'
WHERE Title = 'Homework'
""")

connection.commit()

cursor.execute("SELECT * FROM Notes")

notes = cursor.fetchall()

for note in notes:
    print(note)

connection.close()