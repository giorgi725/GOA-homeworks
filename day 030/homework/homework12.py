# 13) დაწერე ფუნქცია, რომელიც იღებს რიცხვს 'n' და აბრუნებს სიას 1-დან 'n'-ის ჩათვლით ყველა ლუწი რიცხვით. გამოიყენე for ციკლი და if-else

def numbers(n):
    result = []
    for i in range(1, n+1):
        if i % 2 == 0:
            result.append(i)
        else:
            pass 
    return result

print(numbers(10))