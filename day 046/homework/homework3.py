# შექმენით dictionary სტრუქტურა სადაც:
# Key არის სტუდენტის სახელი
# Value არის მისი ქულების სია (მინიმუმ 5 საგნის ქულა)
# •    შექმენით ფუნქციები:
# calculate_average(scores) - ითვლის საშუალო ქულას
# get_grade(average) - აბრუნებს შეფასებას (A: 91-100, B: 81-90, C: 71-80, D: 61-70, E: 51-60, FX: 41-50, F: 0-40)
# find_top_student(students_dict) - პოულობს საუკეთესო სტუდენტს
# •    მინიმუმ 5 სტუდენტისთვის:
# გამოთვალეთ საშუალო ქულა
# განსაზღვრეთ შეფასება
# დაალაგეთ სტუდენტები საშუალო ქულის მიხედვით (კლებადობით)
# •    შედეგები გამოიტანეთ ფორმატირებული სახით

students = {
    "Giorgi": [85, 90, 78, 88, 92],
    "Nino": [95, 93, 97, 90, 94],
    "Luka": [70, 75, 72, 68, 74],
    "Mariam": [88, 84, 86, 90, 89],
    "Ana": [60, 65, 58, 62, 64]
}

def calculate_average(scores):
    return sum(scores) / len(scores)

def get_grade(average):
    if 91 <= average <= 100:
        return "A"
    elif 81 <= average <= 90:
        return "B"
    elif 71 <= average <= 80:
        return "C"
    elif 61 <= average <= 70:
        return "D"
    elif 51 <= average <= 60:
        return "E"
    elif 41 <= average <= 50:
        return "FX"
    else:
        return "F"

def find_top_student(students_dict):
    best_name = None
    best_avg = 0

    for name, scores in students_dict.items():
        avg = calculate_average(scores)
        if avg > best_avg:
            best_avg = avg
            best_name = name

    return best_name, best_avg

results = []

for name, scores in students.items():
    avg = calculate_average(scores)
    grade = get_grade(avg)
    results.append((name, avg, grade))

results.sort(key=lambda x: x[1], reverse=True)

top_name, top_avg = find_top_student(students)

print("სტუდენტების შედეგები")
print("-" * 30)

for name, avg, grade in results:
    print(f"{name:<10} {avg:<10.2f} {grade}")


print(f"საუკეთესო სტუდენტი:{top_name} ")