# # Extra 6: Reverse a String
# # Instructions:
# # Write a program reverse_string(s) that takes a string and returns its reverse. The function should:
# # Accept a string as input.
# # Return the reversed string.
# # Test Cases:
# # assert reverse_string("hello") == "olleh" 
# # assert reverse_string("Python") == "nohtyP" 

# def reverse_string(s):
#     return s[::-1]

# s=("hello")
# print(reverse_string(s))

name = str(input("enter your name: "))
surname = str(input("enter your surname: "))
age  =int(input("enter your age: "))
living = str(input("Where do you live?: "))
gender = str(input("Enter your genter: "))
print(f"your name is {name} your age is {age} u living in {living} your gender is {gender}")