a = [1, 2, 3]
print(len(a))   

b = []
b.append(10)
print(b) 

a = [1, 2, 3]
a.insert(1, 10)
print(a)

c = [1, 2]
c.extend([3, 4])
print(c)   

d = [10, 20, 30]
d.pop(1)
print(d) 

e = [1, 2, 3, 2]
e.remove(2)
print(e) 

f = [3, 1, 2]
f.sort()
print(f) 

g = [3, 1, 2]
print(sorted(g))  
print(g)  

# 2) შექმენით ფუნქცია welcome, რომელიც მიიღებს პარამეტრებად first_name, last_name. თქვენი დავალება დააბრუნოთ მნიშვნელობა: "Hello <first_name> <last_name>". კომენტარებით ახსენით რა არის return და რით განსხვავდება print-ისგან
def welcome(first_name, last_name):
    return f"Hello {first_name} {last_name}"

# return – არის ბრძანება, რომელიც:წყვეტს ფუნქციის მუშაობას