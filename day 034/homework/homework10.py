# 11) დაწერეთ ფუნქცია, რომელიც იღებს set-ს, ამატებს მას 3 ელემენტს add() მეთოდით, შემდეგ შლის ერთ ელემენტს remove() მეთოდით და აბრუნებს საბოლოო შედეგს

numbers = {102,101,345,344,343}

def add_nums(nums):
    nums.add(103)
    nums.add(347)
    nums.add(346)
    nums.remove(345)
    print(nums)

add_nums(numbers)