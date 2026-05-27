import sqlite3

def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()

connection = sqlite3.connect("profiles.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Profiles (
    Name TEXT,
    Email TEXT,
    ProfilePicture BLOB
)
""")

img1 = read_file("profile1.png")
img2 = read_file("profile2.png")
img3 = read_file("profile3.png")

cursor.execute("""
INSERT INTO Profiles (Name, Email, ProfilePicture)
VALUES (?, ?, ?)
""", ("Giorgi", "giorgi@gmail.com", img1))

cursor.execute("""
INSERT INTO Profiles (Name, Email, ProfilePicture)
VALUES (?, ?, ?)
""", ("Nika", "nika@gmail.com", img2))

cursor.execute("""
INSERT INTO Profiles (Name, Email, ProfilePicture)
VALUES (?, ?, ?)
""", ("Ana", "ana@gmail.com", img3))

connection.commit()

new_picture = read_file("new_profile.png")

cursor.execute("""
UPDATE Profiles
SET ProfilePicture = ?
WHERE Name = ?
""", (new_picture, "Nika"))

connection.commit()

cursor.execute("SELECT * FROM Profiles")

rows = cursor.fetchall()

connection.close()