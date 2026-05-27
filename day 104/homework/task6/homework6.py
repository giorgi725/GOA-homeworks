import sys
import sqlite3
import tempfile

from PyQt5.QtWidgets import (
    QApplication,
    QWidget,
    QLabel,
    QVBoxLayout
)

from PyQt5.QtGui import QPixmap


# სურათის წაკითხვის ფუნქცია
def read_file(filename):
    with open(filename, "rb") as file:
        return file.read()


# Database-თან კავშირი
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

# სურათების წაკითხვა
img1 = read_file("photo1.png")
img2 = read_file("photo2.png")
img3 = read_file("photo3.png")
img4 = read_file("photo4.png")
img5 = read_file("photo5.png")

# მონაცემების დამატება
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

# ცვლილებების შენახვა
connection.commit()

print("5 სურათი დაემატა ბაზაში")


# ერთ-ერთი სურათის წამოღება
cursor.execute("""
SELECT PhotoData
FROM Photos
WHERE PhotoName = ?
""", ("Mountain",))

row = cursor.fetchone()

# BLOB მონაცემის მიღება
image_data = row[0]

# დროებითი ფაილის შექმნა
temp_file = tempfile.NamedTemporaryFile(
    delete=False,
    suffix=".png"
)

# bytes მონაცემის ჩაწერა დროებით ფაილში
temp_file.write(image_data)

temp_file.close()


# PyQt5 Window
class Window(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("SQLite Image Viewer")

        layout = QVBoxLayout()

        # QLabel
        label = QLabel()

        # QPixmap
        pixmap = QPixmap(temp_file.name)

        # QLabel-ში სურათის ჩასმა
        label.setPixmap(pixmap)

        layout.addWidget(label)

        self.setLayout(layout)


# App-ის გაშვება
app = QApplication(sys.argv)

window = Window()
window.show()

sys.exit(app.exec_())


# Database-ის დახურვა
connection.close()