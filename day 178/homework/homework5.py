# 5) დაწერეთ ფუნქცია, რომელიც შეამოწმებს, არის თუ არა A სიის ყველა ელემენტი B სიაში. გამოიყენეთ A=[2, 4, 6], B=[1, 2, 3, 4, 5, 6]. ამოხსენით ამოცანა ციკლების გამოყენებით, ახსენით როგორ მუშაობს თქვენი კოდი და განსაზღვრეთ დროითი სირთულე

def check_elements(A, B):
    for element in A:
        found = False
        for item in B:
            if element == item:
                found = True
                break
        if not found:
            return False
    return True


A = [2, 4, 6]
B = [1, 2, 3, 4, 5, 6]

print(check_elements(A, B))

# დროითი სირთულე (Time Complexity)
# O(n × m)