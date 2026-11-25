# 3) დაწერეთ იტერაციული binary_search(A, x) ფუნქცია. გამოიყენეთ A=[1, 3, 4, 6, 7, 8, 11], x=9. აჩვენეთ low, mid და high ცვლადების მნიშვნელობები თითოეულ იტერაციაზე. ახსენით რა მოხდება, თუ ელემენტი არ არსებობს და განსაზღვრეთ დროითი სირთულე

def binary_search(A, x):
    low = 0
    high = len(A) - 1

    while low <= high:
        mid = (low + high) // 2
        if A[mid] == x:
            return mid
        elif A[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1

A = [1, 3, 4, 6, 7, 8, 11]
x = 9

print(binary_search(A, x))

# სივრცითი სირთულე: O(1), რადგან იტერაციული ალგორითმი დამატებით მუდმივ მეხსიერებას იყენებს.