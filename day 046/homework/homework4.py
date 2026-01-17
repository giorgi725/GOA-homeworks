#  პროგრამა Math მოდულის გამოყენებით (ან random მოდული) გენერირებს შემთხვევით მთელ რიცხვს 1-დან 100-მდე
# •    მომხმარებელს ეძლევა მაქსიმუმ 7 მცდელობა რიცხვის გამოსაცნობად
# •    ყოველ მცდელობაზე:
# იყენებს try-except ბლოკს არასწორი შეტანის დასამუშავებლად
# აძლევს მინიშნებას: "ძალიან დიდია" ან "ძალიან პატარაა"
# ითვლის დარჩენილ მცდელობებს
# •    თამაშის დასრულებისას:
# თუ გამოიცნო - გამოაქვს გილოცავთ და მცდელობების რაოდენობა
# თუ არ გამოიცნო - გამოაქვს სწორი რიცხვი
# სთავაზობს ხელახლა თამაშის დაწყებას (y/n)
# •    ინახავს სტატისტიკას tuple-ში: (თამაშების რაოდენობა, მოგებების რაოდენობა, საშუალო მცდელობები)

import random

games_played = 0
games_won = 0
total_attempts = 0

def play_game():
    global games_played, games_won, total_attempts

    secret_number = random.randint(1, 100)
    max_attempts = 7
    attempts_used = 0

    print("\n მე ჩავიფიქრე რიცხვი 1-დან 100-მდე!")

    while attempts_used < max_attempts:
        try:
            guess = int(input(f"შეიყვანეთ რიცხვი (დარჩენილია {max_attempts - attempts_used} მცდელობა): "))
        except ValueError:
            print("გთხოვთ შეიყვანოთ მთელი რიცხვი!")
            continue

        attempts_used += 1

        if guess > secret_number:
            print("ძალიან დიდია")
        elif guess < secret_number:
            print("ძალიან პატარაა")
        else:
            print(f"გილოცავთ! გამოიცანით {attempts_used} მცდელობაში!")
            games_won += 1
            total_attempts += attempts_used
            games_played += 1
            return

    print(f"ვერ გამოიცანით. სწორი რიცხვი იყო: {secret_number}")
    total_attempts += attempts_used
    games_played += 1


def show_statistics():
    if games_played == 0:
        avg_attempts = 0
    else:
        avg_attempts = total_attempts / games_played

    stats = (games_played, games_won, round(avg_attempts, 2))

    print("\nთამაშის სტატისტიკა:")
    print(f"თამაშები: {stats[0]}")
    print(f"მოგებები: {stats[1]}")
    print(f"საშუალო მცდელობები: {stats[2]}")

    return stats

while True:
    play_game()

    choice = input("\nგსურთ ხელახლა თამაში? (y/n): ").lower()
    if choice != 'y':
        statistics = show_statistics()
        print("\nსტატისტიკა ", statistics)
        print("ნახვამდის!")
        break
