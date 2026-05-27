import sqlite3

def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()

connection = sqlite3.connect("avatars.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Avatars (
    Username TEXT,
    Avatar BLOB
)
""")

avatar1 = read_file("avatar1.png")
avatar2 = read_file("avatar2.png")
avatar3 = read_file("avatar3.png")
avatar4 = read_file("avatar4.png")

cursor.execute("""
INSERT INTO Avatars (Username, Avatar)
VALUES (?, ?)
""", ("giorgi", avatar1))

cursor.execute("""
INSERT INTO Avatars (Username, Avatar)
VALUES (?, ?)
""", ("nika", avatar2))

cursor.execute("""
INSERT INTO Avatars (Username, Avatar)
VALUES (?, ?)
""", ("luka", avatar3))

cursor.execute("""
INSERT INTO Avatars (Username, Avatar)
VALUES (?, ?)
""", ("ana", avatar4))

connection.commit()

cursor.execute("""
DELETE FROM Avatars
WHERE Username = ?
""", ("nika",))

connection.commit()

cursor.execute("""
SELECT Username FROM Avatars
""")

rows = cursor.fetchall()

connection.close()