# სტუდენტების dictionary
students = {
    "Giorgi": [85, 90, 58, 92, 87],
    "Nino": [25, 93, 94, 42, 94],
    "Luka": [76, 75, 12, 68, 74],
    "Ana": [65, 65, 53, 97, 62],
    "Dato": [56, 65, 52, 98, 53]
}

def calculate_average(scores):
    return sum(scores) / len(scores)

def get_grade(avg):
    if 91 <= avg <= 100:
        return "A"
    elif 81 <= avg <= 90:
        return "B"
    elif 71 <= avg <= 80:
        return "C"
    elif 61 <= avg <= 70:
        return "D"
    elif 51 <= avg <= 60:
        return "E"
    elif 41 <= avg <= 50:
        return "FX"
    else:
        return "F"

def find_top_student(students_dict):
    best_student = None
    highest_avg = 0

    for name, scores in students_dict.items():
        avg = calculate_average(scores)
        if avg > highest_avg:
            highest_avg = avg
            best_student = name
    return best_student, highest_avg

results = []

for name, scores in students.items():
    avg = calculate_average(scores)
    grade = get_grade(avg)
    results.append((name, avg, grade))

results.sort(key=lambda x: x[1], reverse=True)

top_student, top_avg = find_top_student(students)

for name, avg, grade in results:
    print(f"name: {name}, average: {avg}, grade: {grade}")

print(f"best student: {top_student}")