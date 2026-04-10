# 2) debugging მოახდინეთ ჩვენ მიერ გაკვეთილზე განხილული insertion_sort (ჩასმის ხერხით სორიტების) ალგორითმის და ახსენით როგორ მუშაობს კომენტარებით

# მასივი იყოფა ორ ნაწილად: მარცხენა ნაწილი - უკვე დალაგებულია, მარჯვენა ნაწილი - დასალაგებელია

# 1. ვიწყებთ მეორე ელემენტიდან (i = 1)
# 2. ვიღებთ ამ ელემენტს
# 3. ვადარებთ მარცხნივ მდგომ ელემენტებს
# 4. სანამ საჭიროა: ვცვლით ადგილებს, მივდივართ მარცხნივ
# 5. ელემენტი “ჩაჯდება” სწორ პოზიციაში


# 3) მოიძიეთ ინფორმაცია quick sort (სწრაფი სორტირება) და merge sort ალგორითმებზე, დაწერეთ ამ ალგორითმების კოდი თქვენი, მოახდინეთ კოდის დებაგირება  და დაწერეთ კომენტარებით თუ როგორ მუშაობს

# Quick Sort მუშაობს გაყოფა და მართვა (divide & conquer)

# ვირჩევთ ერთ ელემენტს - pivot
# მასივს ვყოფთ ორ ნაწილად:
# პატარა ელემენტები (pivot-ზე ნაკლები)
# დიდი ელემენტები (pivot-ზე მეტი)
# იგივე პროცესს ვიმეორებთ ორივე ნაწილზე (რეკურსია)

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = []   
    middle = [] 
    right = []  
    
    for x in arr:
        if x < pivot:
            left.append(x)
        elif x > pivot:
            right.append(x)
        else:
            middle.append(x)
    return quick_sort(left) + middle + quick_sort(right)

arr = [7,9,3,2,1,8,5,6,5,4]
print(quick_sort(arr))


# Merge Sort-იც არის divide & conquer, მაგრამ სხვანაირად მუშაობს:

# მასივს ვყოფთ შუაზე
# ვალაგებთ ორივე ნახევარს (რეკურსიულად)
# ვაერთებთ (merge) დალაგებულად

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    left = merge_sort(left)
    right = merge_sort(right)
    
    return merge(left, right)


def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

arr = [7,9,3,2,1,8,5,6,5,4]
print(merge_sort(arr))


# მოკლე დასკვნა:
# ორივე არის divide & conquer
# Quick Sort იყენებს pivot-ს
# Merge Sort იყენებს merge პროცესს
# Merge Sort უფრო სტაბილურია, Quick Sort — უფრო სწრაფი პრაქტიკაში


# 4) შექმენით ფუნქცია სახელად caesar_cipher რომელიც მიიღებს ტექსტს და რიცხვს shift, ფუნქციამ უნდა გადაადგილოს მხოლოდ ანბანის ასოები ASCII კოდების მიხედვით. მაგ: "abc", 2 -> "cde". სხვა სიმბოლოები უცვლელი უნდა დარჩეს, გამოიყენეთ ord() და chr() და კომენტარებით ახსენით ალგორითმი

def caesar_cipher(text, shift):
    res = ""  
    
    for char in text:
        if 'a' <= char <= 'z':
            ascii_code = ord(char)
            new_code = (ascii_code - ord('a') + shift) % 26 + ord('a')
            res += chr(new_code)
        elif 'A' <= char <= 'Z':
            ascii_code = ord(char)
            new_code = (ascii_code - ord('A') + shift) % 26 + ord('A')
            res += chr(new_code)
        else:
            res += char
    return res