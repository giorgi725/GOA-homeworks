# https://leetcode.com/problems/longest-common-prefix/?envType=problem-list-v2&envId=array


class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""
        first = strs[0]
        for s in strs[1:]:
            while not s.startswith(first):
                first = first[:-1]
                if first == "":
                    return ""
        return first

# https://leetcode.com/problems/remove-duplicates-from-sorted-array?envType=problem-list-v2&envId=array

class Solution(object):
    def removeDuplicates(self, nums):
        if not nums:
            return 0
            
        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]
        return i + 1

# https://leetcode.com/problems/remove-element?envType=problem-list-v2&envId=array

class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        ele = 0  
        for i in range(len(nums)):
            if nums[i] != val:
                nums[ele] = nums[i]
                ele += 1
        return ele

# https://leetcode.com/problems/plus-one/description/?envType=problem-list-v2&envId=array

class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        return [1] + digits

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=problem-list-v2&envId=array

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            profit = price - min_price
            if profit > max_profit:
                max_profit = profit
        return max_profit