# 7) დაწერეთ ფუნქცია tuple_info, რომელიც მიიღებს tuple-ს და დაბეჭდავს მის სიგრძეს, პირველ და ბოლო ელემენტს

tuple = (12,231,213,12,12432,2,321,17)

def tuple_info(tuple):
    print(len(tuple))
    print(tuple[0])
    print(tuple[-1])

tuple_info(tuple)