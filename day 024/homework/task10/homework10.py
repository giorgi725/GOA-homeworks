# 11) დაწერეთ პროგრამა რომელიც ქმნის სამ შემთხვევით რიცხვს random.randint გამოყენებით თითოეულზე გამოთვალეთ კვადრატული ფესვი math.sqrt ფუნქციით და დაბეჭდეთ შედეგები

import random
import math

for _ in range(3):
    num = random.randint(1, 100)
    sqrt_num = math.sqrt(num)
    print(f"Number: {num}, Square root: {sqrt_num}")