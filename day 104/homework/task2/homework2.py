import sqlite3

def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()

connection = sqlite3.connect("gallery.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Gallery (
    ImageName TEXT,
    ImageData BLOB
)
""")

img1 = read_file("image.png")
img2 = read_file("beach2.png")
img3 = read_file("beach3.png")

cursor.execute("""
INSERT INTO Gallery (ImageName, ImageData)
VALUES (?, ?)
""", ("beach", img1))

cursor.execute("""
INSERT INTO Gallery (ImageName, ImageData)
VALUES (?, ?)
""", ("beach", img2))

cursor.execute("""
INSERT INTO Gallery (ImageName, ImageData)
VALUES (?, ?)
""", ("beach", img3))

connection.commit()


new_image = read_file("image.png")

cursor.execute("""
UPDATE Gallery
SET ImageData = ?
WHERE ImageName = ?
""", (new_image, "Mountain"))

connection.commit()

cursor.execute("SELECT * FROM Gallery")

rows = cursor.fetchall()

connection.close()