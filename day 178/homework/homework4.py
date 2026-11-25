# 4) დაწერეთ merge_sort(A) ფუნქცია, რომელიც მასივს ზრდადობით დაალაგებს. გამოიყენეთ [8, 3, 6, 2, 5, 1]. აჩვენეთ მასივის გაყოფისა და გაერთიანების თითოეული ეტაპი. ახსენით რას ნიშნავს სტაბილური დალაგება და განსაზღვრეთ ალგორითმის დროითი და სივრცითი სირთულე

def merge_sort(A):
    if len(A) <= 1:
        return A
    mid = len(A) // 2
    left = A[:mid]
    right = A[mid:]
    left = merge_sort(left)
    right = merge_sort(right)
    result = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

A = [8, 3, 6, 2, 5, 1]

print(merge_sort(A))


# Merge Sort მასივს ზრდადობით ალაგებს გაყოფისა და გაერთიანების პრინციპით. მისი დროითი სირთულეა O(n log n), ხოლო სივრცითი სირთულე — O(n).