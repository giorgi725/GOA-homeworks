#5) სიიდან "mixed = [2, 5, 8, 11, 14, 17, 20]" შექმენით ორი სია list comprehension-ით: ერთში მხოლოდ ლუწები, მეორეში — კენტები

mixed = [2, 5, 8, 11, 14, 17, 20]
odd=[num for num in mixed if num%2==1]
print(odd)
even=[num for num in mixed if num%2==0]
print(even)