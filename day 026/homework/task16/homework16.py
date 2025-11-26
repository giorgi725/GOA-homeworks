# 17) შექმენით ფუნქცია რომელიც მიიღებს x და y კორდინატს, შემდეგ კი გადაცემული კორდინატების ადგილას დახაზავს კვადრატს, დავალების შესასრულებლად გამოიყენეთ მოდული: from turtle import *

from turtle import *

def draw_square(x, y):
    penup()        
    goto(x, y)    
    pendown()
    for _ in range(4):
        forward(100)   
        right(90)     

draw_square(0, 0)
done()