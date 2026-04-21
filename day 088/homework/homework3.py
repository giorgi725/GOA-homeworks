import random

stats = [0, 0, 0]

def play_game():
    number = random.randint(1, 100)
    attempts_left = 7
    attempts_used = 0

    while attempts_left > 0:
        try:
            guess = int(input(f"enter number ({attempts_left} tries left): "))
            attempts_used += 1

            if guess > number:
                print("too high!")
            elif guess < number:
                print("too low!")
            else:
                print(f"congrats! you've guessed in {attempts_used} tries!")
                return True, attempts_used
            attempts_left -= 1
        except ValueError:
            print("please enter number!")
    print(f"u lose! correct number was: {number}")
    return False, attempts_used

while True:
    win, attempts = play_game()
    stats[0] += 1  
    stats[2] += attempts  
    if win:
        stats[1] += 1  
    again = input("want again? (y/n): ").lower()
    if again != 'y':
        break

avg_attempts = stats[2] / stats[0] if stats[0] > 0 else 0

final_stats = (stats[0], stats[1], round(avg_attempts, 2))

print(f"played: {final_stats[0]}")
print(f"win: {final_stats[1]}")
print(f"tries: {final_stats[2]}")