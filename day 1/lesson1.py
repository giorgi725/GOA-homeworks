from turtle import *

#we want to paint a house

#step 1:  draw a square
speed(30)
width(7)
color("purple")
forward (200)
left(90)

forward (200)
left(90)

forward (200)
left(90)

forward (200)
left(90)
#end of square

#drawing a door

forward(70)
color("YELLOW")
left(90)
forward(100) #height of door
right(90)
forward(60)
right(90)
forward(100)

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

width(5)
color("green")

penup()
goto(20,110)
pendown()

left(120)
forward(40)
left(90)
forward(65)
left(90)
forward(40)
left(90)
forward(65)

penup()
goto(20,143)
pendown()

left(90)
forward(40)

penup()
goto(40,110)
pendown()

left(90)
forward(65)

penup()
goto(140,110)
pendown()

forward(65)
right(90)
forward(40)
right(90)
forward(65)
right(90)
forward(40)

penup()
goto(160,110)
pendown()

right(90)
forward(65)

penup()
goto(140,143)
pendown()

right(90)
forward(40)

color("white")
penup()
goto(-200,-200)
pendown()

exitonclick()