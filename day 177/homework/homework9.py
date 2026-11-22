# 10) ახსენით Selection Sort-ის მუშაობის პრინციპი და დაწერეთ მისი ალგორითმი Python-ში. მოცემული მასივი [29, 10, 14, 37, 13] დაალაგეთ ზრდადობით, აჩვენეთ თითოეული გარე იტერაციის შედეგი და დაითვალეთ შედარებებისა და გაცვლების რაოდენობა. განსაზღვრეთ საუკეთესო, საშუალო და უარესი დროითი სირთულე

def selection_sort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr


arr = [29, 10, 14, 37, 13]

print(selection_sort(arr))

# სულ დავჭირდა 10 შედარება 

# Best Case	O(n²)
# Average Case	O(n²)
# Worst Case	O(n²)

# Selection Sort არის დალაგების ალგორითმი, რომელიც ყოველ იტერაციაზე მასივის დაუდალაგებელ ნაწილში ეძებს უმცირეს ელემენტს და ცვლის მას მიმდინარე პოზიციაზე არსებულ ელემენტთან.