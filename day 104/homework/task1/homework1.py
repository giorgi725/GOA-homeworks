import sqlite3

def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()

connection = sqlite3.connect("images.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Images (
    Title TEXT,
    Photo BLOB
)
""")

img1 = read_file("beach.png")
img2 = read_file("images.png")

cursor.execute("""
INSERT INTO Images (Title, Photo)
VALUES (?, ?)
""", ("First Image", img1))

cursor.execute("""
INSERT INTO Images (Title, Photo)
VALUES (?, ?)
""", ("Second Image", img2))

connection.commit()

cursor.execute("SELECT * FROM Images")

rows = cursor.fetchall()

connection.close()