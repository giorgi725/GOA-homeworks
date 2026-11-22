# 8) ახსენით Insertion Sort-ის მუშაობის პრინციპი და დაწერეთ მისი ალგორითმი Python-ში. მოცემული მასივი [8, 3, 6, 2, 5] დაალაგეთ ზრდადობით, აჩვენეთ ყველა იტერაცია, თითოეული key-ის მნიშვნელობა და ელემენტების მარჯვნივ გადაწევების რაოდენობა. განსაზღვრეთ საუკეთესო, საშუალო და უარესი დროითი სირთულე

# რა არის Insertion Sort?
# Insertion Sort არის ალგორითმი, რომელიც მასივს ზრდადობით ან კლებადობით ალაგებს.

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

arr = [8, 3, 6, 2, 5]

print(insertion_sort(arr))

# es aris O(n^2) algorithmi