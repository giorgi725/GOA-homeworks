# 6) დაწერეთ ფუნქცია, რომელიც იპოვის [6, 1, 7] სიის ყველა ქვესიმრავლეს, რომელთა ელემენტების ჯამი 8-ის ტოლია. ახსენით როგორ ამოწმებს ალგორითმი შესაძლო კომბინაციებს და განსაზღვრეთ დროითი სირთულე/

def find_subsets(A, target):
    result = []

    def backtrack(index, current, total):
        if total == target:
            result.append(current.copy())
            return
        if index == len(A) or total > target:
            return
        current.append(A[index])
        backtrack(index + 1, current, total + A[index])
        current.pop()
        backtrack(index + 1, current, total)
    backtrack(0, [], 0)

    return result


A = [6, 1, 7]

print(find_subsets(A, 8))

# დროითი სირთულე (Time Complexity)
# O(2ⁿ) — თითოეულ ელემენტზე გვაქვს ორი არჩევანი: ავიღოთ ან არ ავიღოთ. ამიტომ სულ მაქსიმუმ \(2^n\) ქვესიმრავლე არსებობს.

# თუ თითოეული ქვესიმრავლის ჯამის გამოთვლასაც ვითვალისწინებთ, ზოგადი ზედა შეფასებაა O(n × 2ⁿ).

# სივრცითი სირთულე: O(n) რეკურსიისა და მიმდინარე ქვესიმრავლისთვის, ნაპოვნი პასუხების სივრცის გარდა.