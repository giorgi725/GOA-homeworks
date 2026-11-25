# 2) დაწერეთ რეკურსიული ფუნქცია count_vowels(s), რომელიც სტრიქონში ინგლისური ხმოვნების რაოდენობას დაითვლის. შეამოწმეთ s="education". ახსენით რეკურსიის მუშაობა, გაჩერების პირობა და განსაზღვრეთ დროითი სირთულე

def count_vowels(s):
    if len(s) == 0:
        return 0
    
    if s[0].lower() in "aeiou":
        return 1 + count_vowels(s[1:])

    return count_vowels(s[1:])

print(count_vowels("education"))

# დროითი სირთულე (Time Complexity)
# O(n) — თითოეულ სიმბოლოს ერთხელ ვამოწმებთ.