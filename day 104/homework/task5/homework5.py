import sqlite3

def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()

connection = sqlite3.connect("notes_with_images.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Notes (
    Title TEXT,
    Content TEXT,
    NoteImage BLOB
)
""")

img1 = read_file("SQL.png")
img2 = read_file("python.png")
img3 = read_file("node.png")

cursor.execute("""
INSERT INTO Notes (Title, Content, NoteImage)
VALUES (?, ?, ?)
""", ("Python Note", "Python basics and syntax", img1))

cursor.execute("""
INSERT INTO Notes (Title, Content, NoteImage)
VALUES (?, ?, ?)
""", ("SQL Note", "SQLite database tutorial", img2))

cursor.execute("""
INSERT INTO Notes (Title, Content, NoteImage)
VALUES (?, ?, ?)
""", ("Node.js Note", "Backend development with Node.js", img3))

connection.commit()

new_image = read_file("updated_note.png")

cursor.execute("""
UPDATE Notes
SET Content = ?, NoteImage = ?
WHERE Title = ?
""", (
    "Updated SQL tutorial with examples",
    new_image,
    "SQL Note"
))

connection.commit()

cursor.execute("SELECT * FROM Notes")

rows = cursor.fetchall()

connection.close()