"""https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python"""

# Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    positives = 0
    negatives_sum = 0

    for num in arr:
        if num > 0:
            positives += 1
        elif num < 0:
            negatives_sum += num

    return [positives, negatives_sum]