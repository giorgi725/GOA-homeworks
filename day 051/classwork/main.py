# products = {
#     "Apple":[12,3,'2027-JAN-12'],
#     "peach":[42,2,'2026-DEC-29'],
#     "Banana":[23,4,'2025-SEP-13'],
#     "Grapes":[17,5,'2024-MAY-2']
# }

# def no_restock(key):
#     return products[key][0] > 17

# new = filter(no_restock , products)
# print(list(new))


# nums = [12,3,213,2133,42,12,12,321,3,12]

# def operation(x):
#     return x + 5
# res = map(operation,nums)
# print(list(res))

# new_products = filter(lambda key: products[key][0] >17 , products)
# print(list(new_products))

# tripled = list(map(lambda x: x * 3 ,[12,3,213,2133,42,12,12,321,3,12] ))
# print(tripled)

# data = [("B", 22, 1), ("A", 12 ,3), ("C", 14, 2 )]
# print(sorted(data))

# print(sorted(data, key=lambda x: x[0]))
# # A B C
# print(sorted(data, key=lambda x: x[1]))
# # 12 14 22
# print(sorted(data, key=lambda x: x[2]))
# #1 2 3
# welcome = 'hello'
# def welcome():
#     return 'hyy'
# greet = welcome
# print(greet)


# def mult(n):
#     return lambda a: a * n

# tripler = mult(3)
# doubler = mult(2)
# print(doubler(100))   
# print(doubler(555))  

# print(tripler(999))   
# print(tripler(123)) 

def func2(func):
    def wrapper():
        print("---start----")
        x = func()
        print('----end----')
        return x
    return wrapper

@func2
def func1():
    print("Hello function 1")
    return "7"

f = func2(func1)
print(f())