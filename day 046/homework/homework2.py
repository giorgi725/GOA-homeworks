# შექმენით dictionary სტრუქტურა სადაც:
# Key არის წიგნის კოდი
# Value არის dictionary: {'title': 'სახელი', 'author': 'ავტორი', 'year': წელი, 'available': True/False}
# •    შექმენით ფუნქციები:
# add_book(library, isbn, book_info) - ამატებს ახალ წიგნს
# search_by_author(library, author) - პოულობს ავტორის ყველა წიგნს
# get_available_books(library) - აბრუნებს ხელმისაწვდომ წიგნებს
# oldest_book(library) - პოულობს ყველაზე ძველ წიგნს
# •    მინიმუმ 5 წიგნისთვის:
# დაამატეთ ბიბლიოთეკაში
# იპოვეთ კონკრეტული ავტორის წიგნები
# გამოიტანეთ ხელმისაწვდომი წიგნები
# იპოვეთ ყველაზე ძველი წიგნი
# •    შედეგები გამოიტანეთ სტრუქტურირებული სახით

library = {}

def add_book(library, isbn, book_info):
    library[isbn] = book_info

def search_by_author(library, author):
    result = []
    for isbn, info in library.items():
        if info['author'].lower() == author.lower():
            result.append((isbn, info))
    return result

def get_available_books(library):
    result = []
    for isbn, info in library.items():
        if info['available']:
            result.append((isbn, info))
    return result

def oldest_book(library):
    return min(library.items(), key=lambda item: item[1]['year'])