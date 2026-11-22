# 7) დაწერეთ ალგორითმი, რომელიც მასივში მეორე ყველაზე დიდ განსხვავებულ რიცხვს იპოვის სორტირების გარეშე. ახსენით როგორ მუშაობს ალგორითმი, რა მოხდება თუ მასივში ყველა რიცხვი ტოლია და განსაზღვრეთ საუკეთესო, საშუალო და უარესი დროითი სირთულე

def second_max(arr):
    max_num = None
    second_max = None
    for num in arr:
        if max_num is None or num > max_num:
            second_max = max_num
            max_num = num
        elif num != max_num and (second_max is None or num > second_max):
            second_max = num
    return second_max


arr = [10, 25, 5, 40, 30]

print(second_max(arr))

# ფორმულა:
# T(n) = n 
