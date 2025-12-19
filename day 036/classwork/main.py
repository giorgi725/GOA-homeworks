# string - უცვლელია საჭიროა ცვალიდის შექმნა

sentence="the dog has climbed over the tree"

# split - დაყოფა;spliT გამოიძახება string -ზე strings დაშლის ქვე სტრინგებათ შეინახავს ნაწილებს სიაში~
sentence_splited=sentence.split()
print(sentence_splited)
# join - შეერთება; შეგვიძლია შევაერთოთ სტრინგები(აუცილებელია სტრინგები),აბრუნებს ერთ დიდ სტრინგად
sentence_joined=sentence.join()
print(sentence_joined)
# replace - ჩანაცვლება; გამოიძახება stringze მაგ:num1=("la", "ka") ყველა la შეიცვლება ka თი
sentence_replaced=sentence.replace("climb", "axta")
print(sentence_replaced)
# strip - გაგლეჯვა; ესეც გამოიძახება stringze(გასაკვირია) რასაც გადავცეთ მოაშორებს თავიდან და ბოლოდან
senterce_striped=sentence.strip("!")
print(sentence_splited)