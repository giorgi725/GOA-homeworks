import sys
import sqlite3
import tempfile

from PyQt5.QtWidgets import (QApplication,QWidget,QLabel,QVBoxLayout)

from PyQt5.QtGui import QPixmap


def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()


connection = sqlite3.connect("app.db")

cursor = connection.cursor()
# Table-ის შექმნა
cursor.execute("""
CREATE TABLE IF NOT EXISTS Photos (
    Id INTEGER PRIMARY KEY,
    PhotoName TEXT,
    PhotoData BLOB
)
""")

img1 = read_file("photo1.png")
img2 = read_file("photo2.png")
img3 = read_file("photo3.png")
img4 = read_file("photo4.png")
img5 = read_file("photo5.png")

photos = [
    ("Nature", img1),
    ("Mountain", img2),
    ("River", img3),
    ("Forest", img4),
    ("Sea", img5)
]

cursor.executemany("""
INSERT INTO Photos (PhotoName, PhotoData)
VALUES (?, ?)
""", photos)

connection.commit()

cursor.execute("""
SELECT PhotoData
FROM Photos
WHERE PhotoName = ?
""", ("Mountain",))

row = cursor.fetchone()

image_data = row[0]

temp_file = tempfile.NamedTemporaryFile(
    delete=False,
    suffix=".png"
)

temp_file.write(image_data)

temp_file.close()

class Window(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("SQLite Image Viewer")

        layout = QVBoxLayout()

        label = QLabel()

        pixmap = QPixmap(temp_file.name)

        label.setPixmap(pixmap)

        layout.addWidget(label)

        self.setLayout(layout)

app = QApplication(sys.argv)

window = Window()
window.show()

sys.exit(app.exec_())

connection.close()