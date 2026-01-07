#17) დაწერეთ ფუნქცია, რომელიც იღებს სამკუთხედის ფუძეს და სიმაღლეს, და აბრუნებს ფართობს. დაამუშავეთ TypeError და ValueError გამონაკლისები

def triangle_area(base, height):
    try:
        area = 0.5 * base * height
    except TypeError:
        print("ფუძე და სიმაღლე უნდა იყვნენ რიცხვები")
        return None
    else:
        if base < 0 or height < 0:
            raise ValueError("ფუძე და სიმაღლე არ შეიძლება იყვნენ უარყოფითი")
        return area
    finally:
        print("შესრულება დასრულდა")

print(triangle_area(10, 5))       
print(triangle_area("10", 5))    
try:
    print(triangle_area(10, -5))  
except ValueError as e:
    print("შეცდომა:", e)
