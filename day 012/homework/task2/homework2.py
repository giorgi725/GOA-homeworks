#3) შექმენით 5 ცვლადი, რომლებშიც შეინახავთ განსხვავებულ ლოგიკურ და შედარების ოპერაციათა შედეგებს (უნდა იყოს შედარების და ლოგიკური ოპერატორები ერთად მაგალითად temperature > 30 and not cloudy), გვერდზე კომენტარის საშვალებით მიუწერეთ ეს შედეგი (boolean მნიშვნელობა) აიღეთ მრავალფეროვანი კომბინაციები

temperature = 32
cloudy = False
is_hot_and_clear = temperature > 30 and not cloudy  # True – ცხელია და არ არის ღრუბლიანი

age = 15
has_id = False
can_enter = age >= 18 or has_id and age > 16  # False – არც 18 წლისაა და არც პირადობა აქვს

score = 95
passed = score >= 50
excellent = score > 90
is_good = passed and not excellent  # False – ჩააბარა, მაგრამ ძალიან მაღალი ქულაა, ამიტომ not excellent → False

rain = True
umbrella = False
get_wet = rain and not umbrella  # True – წვიმს და ქოლგა არ აქვს, დასველდება

speed = 120
limit = 100
fine = speed > limit or speed == limit and not (speed < limit)  # True – გადააჭარბა სიჩქარის ლიმიტს
