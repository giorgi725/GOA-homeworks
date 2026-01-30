vegetables = ("potato", "tomato", "pumpkin")

product1, *rest = vegetables

print(rest)

print("gio", "luka", "nugzar", sep="|")
print("gio", "luka", "nugzar", end="$%^")


# def greeting(visitor, special, *guests):
#     print("Welcome" + visitor)
#     for guest in guests:
#         print("howdy " + guest)
#     print("Hi " + special)
# greeting("irakli", "luka", "zurabi", "dachi", "giorgi")


#*args - arguments
#**kwargs - keyword argument

def greeting(visitor, *guests, **others):
    print("Welcome" + visitor)
    for guest in guests:
        print("howdy " + guest)
    for key in others:
        print(f"hello {key} {others[key]}")
greeting("irakli", "luka", "zurabi", "dachi", "giorgi", special="Nika", celebrity="Zaza", influencer="Dato")


def greet(visitor, *others, special, **VIP):
    print("salami " + visitor)
    for guest in others:
        print("how are u " + others + "?")
    for key in VIP:
        print(f"What's up {key} {VIP[key]} + ?")
    print("hy " + special)
greeting("irakli", "luka", "zurabi", "dachi", "giorgi", special="Nika", VIP="Zaza", others="Dato")

#*args - arguments
#**kwargs - keyword argument


# scope -  წვდომის ხედვის არეალი
# lexical scope - გულისხმობს ნებისმიერი ობიექტის ხელმისაწვდომობა კონკრეტულ კოდის ბლოკში და მის ქვევით

def increase():
    global y
    y = 54534

increase()
print(y)

def first():
    x = 10

    def second():
        print(x)
    second()
first()


# Object oriented Programming

class fighter:
    def __init__(self, name, health, damage, speed):
        self.name =  name
        self.health = health
        self.damage = damage
        self.speed = speed

        # method
    def heal_up(self):
            self.health += 100

class medic:
    def heal_up(self):
        print("healed up")


samurai = fighter("samurai",200, 40, 25)
ninja = fighter("ninja", 80, 60, 40)
doctor = medic()


samurai.heal_up()

print(samurai.health)




# samurai.health = 200
# samurai.damage = 40
# samurai.speed = 25

# print(samurai.health)
# print(samurai.damage)
# print(samurai.speed)

# ninja.health = 80
# ninja.damage = 50
# ninja.speed = 30

# print(ninja.health)
# print(ninja.damage)
# print(ninja.speed)
