# 6) დაწერეთ quick_sort(A) ფუნქცია, რომელიც მასივს ზრდადობით დაალაგებს. გამოიყენეთ A=[9, 4, 8, 6, 1, 7, 3]. ახსენით Pivot-ის დანიშნულება, აჩვენეთ მასივის დაყოფის თითოეული ეტაპი და განსაზღვრეთ საუკეთესო, საშუალო და უარესი დროითი სირთულე

def quick_sort(A):
    if len(A) <= 1:
        return A
    pivot = A[-1]
    left = []
    right = []

    for num in A[:-1]:
        if num < pivot:
            left.append(num)
        else:
            right.append(num)

    return quick_sort(left) + [pivot] + quick_sort(right)


A = [9, 4, 8, 6, 1, 7, 3]

print(quick_sort(A))

# Quick Sort-ის საშუალო დროითი სირთულეა \(O(n \log n)\), ხოლო უარეს შემთხვევაში — \(O(n^2)\).