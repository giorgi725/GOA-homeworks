class Gamer:
    count = 0
    def __init__(self, game, hours_played):
        self.favourite_game = game
        self.hours = hours_played
        Gamer.count += 1

    def play(self):
        self.hours += 1

    @classmethod
    def count_gamers(cls):
        print(cls.count)

zura = Gamer("Roblox", 900)
luka = Gamer("mario", 234)
nika = Gamer("block blast", 999)

zura.play()
Gamer.play(zura)

luka.play()
Gamer.play(luka)

nika.play()
Gamer.play(nika)


class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

class Archer(Fighter):
    def __init__(self, health, damage, speed, range, reload):
        super().__init__(health, damage, speed)
        self.range = range
        self.reload = reload

wizard = Archer(30, 50, 20, 100, 20)
print(wizard.health)
print(wizard.damage)
print(wizard.speed)
print(wizard.range)
print(wizard.reload)