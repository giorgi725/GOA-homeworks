# 5) დაწერე ფუნქცია, რომელიც იღებს ერთ რიცხვს და აბრუნებს "Even" თუ ლუწია, ან "Odd" თუ კენტია

def number(a):
    if a % 2 == 0:
        print("Even")
    else:
        print("Odd")
    return

number(6)