"""https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python"""

# Neutralisation

def neutralise(s1, s2):
    result = ""
    power = len(s1)
    
    for index in range(power):
        sign1 = s1[index]
        sign2 = s2[index]

        if sign1 == sign2:
            result += sign1
        else:
            result += "0"
            
    return result