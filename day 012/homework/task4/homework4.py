#შექმენით პროგრამა, რომელიც განსაზღვრავს productive ცვლადის მნიშვნელობას შემდეგი პირობების მიხედვით:
#read_pages ცვლადში ინახება წაკითხული გვერდების რაოდენობა (მთლიანი რიცხვი).,
#free_time ცვლადში ინახება boolean მნიშვნელობა (True/False), რომელიც გვიჩვენებს, ჰქონდა თუ არა თავისუფალი დრო.,
#productive ცვლადი იქნება ჭეშმარიტი (True), თუ მოსწავლემ წაიკითხა მინიმუმ 20 გვერდი და თავისუფალი დრო ჰქონდა.,

read_pages = 50
free_time = True
productive=((read_pages > 20) and True) # true 20ზე მეტი გვერდი წაიკითხა და დროც ქონდა ორივე True არის True+True=True
print(productive)

read_pages = 10
free_time = True
productive=((read_pages > 20) and True) # False  რადგან 20ზე მეტი გვერდი არ წაუკითავს მაგრამ დრო ქონდა True+False=False (and  ის შემთხვევაში)
print(productive)

read_pages = 45
free_time = False
productive=((read_pages > 20) and False) #False რადგან წაკითხული გვერდები20ზე მეტი არის მაგრამ დრო არის  False: True+False=False (and ის შემთხვევაში)
print(productive)