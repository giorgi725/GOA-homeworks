# def cache_decorator(func):
#     cache = {}
#     def wrapper(n):
#         if n not in cache:
#             cache[n] = func(n)
#         return cache[n]
#     return wrapper

# @cache_decorator
# def square(n):
#     return n ** 2

# @cache_decorator
# def cube(n):
#     return n ** 2

# @cache_decorator
# def power4(n):
#     return n ** 4

# print(square(20))
# print(cube(10))
# print(power4(400))


# def reverse_text(func):
#     def wrapper(words):
#         text = func(words)
#         return text[::-1]
#     return wrapper

# @reverse_text
# def join_words(words):
#     return ' '.join(words)

# print(join_words(['აი,',  'რა', 'მზის', 'სიზმარია,']))
# print(join_words(['აირევი,', 'ივერია...']))
# print(join_words(['აი,',  'დროშა,', 'აშორდია,']))
# print(join_words(['აერების',  'სიბერეა.']))


def keep_history(func):
    history = []
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        history.append(result)
        last_five = history[-5:]
        return result
    return wrapper

@keep_history
def add(a, b):
    return a + b

add(2, 3)
add(10, 5)
add(7, 8)
add(1, 9)
add(4, 6)
add(20, 30)
