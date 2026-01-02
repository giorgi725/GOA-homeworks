def swap_case(word):
    res =""
    for char in word:
        code = ord(char)
        if 65 <= code <= 90:
            new_code = code +32
            res += chr(new_code)
        elif 97 <= code <= 122:
            new_code = code -32
            res += chr(new_code)
        else:
            res += char

    return res

print(swap_case("pYThON"))

# print(chr(77)) #M
# print(ord("F")) #70
