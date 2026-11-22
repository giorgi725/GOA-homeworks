# Big O არის ნოტაცია, რომელიც გვიჩვენებს, როგორ იზრდება ალგორითმის მუშაობის დრო (ოპერაციების რაოდენობა) მონაცემების რაოდენობის გაზრდასთან ერთად.

# ანუ გვაინტერესებს, რამდენი ოპერაციის შესრულება მოუწევს პროგრამას, როდესაც n იზრდება.

# O(1) – Constant Time

# ოპერაციების რაოდენობა არ იცვლება, მიუხედავად იმისა, თუ რამდენი ელემენტი გვაქვს.
# def get_first(arr):    return arr[0]print(get_first([10, 20, 30, 40]))

# O(log n) – Logarithmic Time

# ყოველ ნაბიჯზე მონაცემების რაოდენობა მცირდება (მაგალითად, ორჯერ).

def binary_search(arr, target):   
    left = 0    
    right = len(arr) - 1   
    while left <= right:       
        mid = (left + right) // 2       
        if arr[mid] == target: 
            return mid        
        elif arr[mid] < target:            
            left = mid + 1       
        else:            
            right = mid - 1   
    return -1

# ყოველ ნაბიჯზე საძიებო არე ორჯერ მცირდება.
# გამოიყენება დალაგებულ სიაში ძებნისთვის.

# O(n) – Linear Time

# ოპერაციების რაოდენობა იზრდება მონაცემების რაოდენობის პროპორციულად.
def print_numbers(arr):    
    for num in arr:        
        print(num)
    print_numbers([1, 2, 3, 4, 5])

# - თითოეულ ელემენტს ერთხელ გადავუვლით.
# - თუ ელემენტების რაოდენობა ორმაგდება, ოპერაციებიც დაახლოებით ორმაგდება.


# O(n log n) – Linearithmic Time

# ეს სირთულე აერთიანებს O(n)-სა და O(log n)-ს.
def merge_sort(arr):    
    if len(arr) <= 1:        
        return arr    
    mid = len(arr) // 2   
    left = merge_sort(arr[:mid])    
    right = merge_sort(arr[mid:])    
    return merge(left, right)

def merge(left, right):    
    result = []    
    while left and right:        
        if left[0] < right[0]:            
            result.append(left.pop(0))        
        else:            
            result.append(right.pop(0))    
            return result + left + right


# - სია იყოფა პატარა ნაწილებად.
# - შემდეგ ნაწილები ერთიანდება დალაგებული სახით.
# - გამოიყენება Merge Sort-ში.


# O(n²) – Quadratic Time

# ოპერაციების რაოდენობა იზრდება n-ის კვადრატის პროპორციულად.

def print_pairs(arr):    
    for i in arr:        
        for j in arr:            
            print(i, j)
        print_pairs([1, 2, 3, 4])

# - გვაქვს ერთი for ციკლი და მის შიგნით მეორე for ციკლი.
# - თითოეული ელემენტისთვის მეორე ციკლიც სრულად მუშაობს.
# - თუ მონაცემები ორმაგდება, ოპერაციები ოთხჯერ იზრდება.

