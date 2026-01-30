#2) დაწერეთ ფუნქცია, რომელიც იღებს სიტყვას და პარამეტრად გადასცემს callback ფუნქციას, შემდეგ დაუბრუნეთ callback ფუნქციის შედეგი

def greet(name):
    return f"Hello {name}"

def process_word(word, callback):
    return callback(word)

result = process_word("Giorgi", greet)
print(result)

#3) შექმენით ორი მარტივი ფუნქცია: greet() რომელიც ბეჭდავს "Hello World" და goodbye() რომელიც ბეჭდავს "See you next time". შემდეგ დაწერეთ ფუნქცია higher_func(func), რომელიც იღებს ფუნქციას პარამეტრად და იბეჭდავს მისი შედეგს, გამოიყენეთ greet და goodbye higher_func-ისთან ერთად

def greet():
    return "hello world"

def goodbye():
    return "See you next time"

def higher_func(func):
    print(func())

higher_func(greet)
higher_func(goodbye)

#4) დაწერეთ lambda ფუნქცია, რომელიც იღებს სიტყვას და დაუბრუნებს მას დიდი ასოებით, შემდეგ გამოიყენეთ map ციკლში რამდენიმე სიტყვაზე

fruits = ["banana", "apple", "peach", "pineapple"]

to_upper = lambda word: word.upper()

result = list(map(to_upper, fruits))

print(result)

#5) რიცხვების სიაზე "nums = [2, 4, 6, 8, 10]" გამოიყენეთ filter და lambda, რათა დატოვოთ მხოლოდ ის რიცხვები, რომლებიც იყოფა 4-ზე

nums = [2, 4, 6, 8, 10]

result = list(filter(lambda x: x % 4 == 0, nums))

print(result)

#6) შექმენით lambda ფუნქცია, რომელიც გამრავლებს რიცხვს 3-ზე და გამოიყენეთ map ციკლში სიაზე "nums = [1, 2, 3, 4, 5]"

nums2 = [1, 2, 3, 4, 5]

res2 = list(map(lambda x: x * 3, nums2))

print(res2)

#7) შექმენით list of tuples: data = [("B", 22, 1), ("A", 12, 3), ("C", 14, 2)] და გამოიყენეთ sorted lambda-თ, რომ საქონელი დაითამაშოს მეორე ელემენტის მიხედვით

data = [("B", 22, 1), ("A", 12, 3), ("C", 14, 2)]

print(sorted(data, key=lambda x: x[1]))

#8) შექმენით decorator, რომელიც ბეჭდავს "-----Start-----" ფუნქციის დაწყებამდე და "-----End-----" ფუნქციის შემდეგ, და გამოიყენეთ იგი ფუნქციებზე func1() და func()

def my_decorator(func):
    def wrapper():
        print("-----Start-----")
        func()
        print("-----End-----")
    return wrapper

@my_decorator
def func1():
    print("Function 1 is running")

@my_decorator
def func2():
    print("Function 2 is running")

func1()
func2()

#9) შექმენით ფუნქცია total(price, count), რომელიც აბრუნებს მათ გამრავლებულს, შემდეგ შექმენით lambda ფუნქცია იგივე ფუნქციისთვის

def total(price, count):
    return price * count

res = lambda price, count: price * count

print(total(67, 67))
print(res(67, 67))

#10) შექმენით exam_scores = [85, 62, 95] და გამოიყენეთ map და lambda, რათა გამოიტანოთ, რომელ ქულებს აქვთ შედეგი >= 70

exam_scores = [85, 62, 95]

res = list(map(lambda x: x >= 70, exam_scores))

print(res)