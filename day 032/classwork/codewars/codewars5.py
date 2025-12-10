"""https://www.codewars.com/kata/582e0e592029ea10530009ce/train/python"""

# Duck Duck Goose

def duck_duck_goose(players, goose):
    
    index= (goose - 1) % len(players)
    return players[index].name