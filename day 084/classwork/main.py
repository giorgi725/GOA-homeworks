def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i 
        while j > 0 and arr[j] > arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1
#ზრდადობით
arr = [7,9,3,2,1,8,5,6,5,4]
insertion_sort(arr)
print(arr)  # [9,8,7,6,5,5,4,3,2,1]

def insertion_sort(arr):
        for i in range(1, len(arr)):
                while j > 0 and arr[j] < arr[j - 1]:
                    arr[j], arr[j - 1] = arr[j - 1], arr[j]
                    j -= 1
#კლებადობით
arr = [7,9,3,2,1,8,5,6,5,4]
insertion_sort(arr)
print(arr)  # [1,2,3,4,5,5,6,7,8,9]