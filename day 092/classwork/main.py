from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow,QLabel,QPushButton
import sys

class Window(QMainWindow):
    def __init__(self):
        super(QMainWindow, self).__init__()
        xPosition = 200
        yposition = 200

        width = 500
        height = 400

        #4 არგუმენტი: 1 xposition, 2 yPosition, 3 width, 4 height
        self.setGeometry(xPosition,yposition,width,height)
        self.setWindowTitle("moi program") # sataurti
        self.myWindow()

    def handleclick(self):
        self.mybutton.setText("don't click meeeee")
        self.mybutton.adjustSize()

    def myWindow(self):
        self.textlabel = QLabel(self)
        self.textlabel.setText("helloWorld(print)")
        self.textlabel.move(50,50)

        self.mybutton = QPushButton(self)
        self.mybutton.setText("don't_ click me")

        self.mybutton.clicked.connect(self.handleclick)

        self.mybutton.setStyleSheet("""
            background-color: red;
            border: 2px dashed green;
            font-size: 16px
        """)

def main():
    app = QApplication(sys.argv)
    window = Window()
    window.show()
    sys.exit(app.exec_())

main()