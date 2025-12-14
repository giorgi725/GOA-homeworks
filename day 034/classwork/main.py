fruit = ("Grapes", "Peach", "banana")

def manual_index(sequence,target):
    for index in range(len(sequence)):
        if sequence[index] == target:
            return index
    return -1

print(manual_index(fruit, "Grapes"))

points = (12, 14, 9, 15, 9)
for point in points:
    if point >= 14:
        print(point)


score = (34,43,54,52,46)
math,hystory, *others = score

print(max(score))
print(min(score))

# 3) მოცემული ელემენტებიდან [1, 2, 2, 3, 4, 4, 4, 5] მონაცემთა სიმრავლის მეშვეობით წაშალეთ ელემენტები რომლებიც ერთზე მეტჯერ გვხვდება
nums = {1,2,2,3,4,4,4,5}
# print(set(nums))

nums.remove(1)
nums.add(6)
print(nums)

nums1 = {2,712,9,4,2,1}
nums2 = {1,5,5,2,8,3,6}

print(nums1.union(nums2))
print(nums1.symmetric_difference(nums2))

# print(nums1.union(nums2))
# print(nums1.intersection(nums2))
# print(nums1.difference(nums2))
# print(nums1.symmetric_difference(nums2))




# list-დალაგებული (order), შეიძლება შეცვლა (mutable), დუპლიკატები შეიძლება
# tuple -არის დალაგებული, შეცვლა არ შეიძლება (immutable), დუბლიკატები შეიძლება
# set- დალაგებული არ არის, შეცვლა შესაძლებელია, დუბლიკატები არ შეიძლება

nums = [2,712,9,4,2,1]

nums_sorted = sorted(nums)
print(nums_sorted)
print(nums.sort())
print("34fu2de".isnumeric()) # false