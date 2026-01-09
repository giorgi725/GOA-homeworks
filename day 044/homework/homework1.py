#1) დაწერეთ ფუნქცია, რომელიც იღებს სამკუთხედის ფუძეს და სიმაღლეს, და აბრუნებს ფართობს. დაამუშავეთ TypeError და ValueError გამონაკლისები

def triangle_area(base, height):
    try:
        if not (isinstance(base, (int, float)) and isinstance(height, (int, float))):
            raise TypeError("Base and height must be numbers.")
        if base <= 0 or height <= 0:
            raise ValueError("Base and height must be positive numbers.")
        area = 0.5 * base * height
        return area

    except TypeError as k:
        return f"TypeError: {k}"
    except ValueError as k:
        return f"ValueError: {k}"