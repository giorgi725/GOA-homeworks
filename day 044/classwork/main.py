def insertion_sort(arr):
    for i in range(len(arr)):
        k = i     
        while arr[k-1] > arr[k] and k>0:
            temp =arr[k-1]
            arr[k-1] = arr[k]
            arr[k]=temp
            k -= 1
        return arr