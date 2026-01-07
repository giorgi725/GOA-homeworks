#19) შექმენით პროგრამა, რომელიც ფაილში "log.txt" ჩაწერს შეცდომის შეტყობინებას მაშინ, როცა try ბლოკში შეცდომა მოხდება. გამოიყენეთ except და with

try:
    result = 10 / 0
except Exception as e:
    with open("log.txt", "a") as log_file: 
        log_file.write(f"შეცდომა მოხდა: {e}\n")
    print("შეცდომა ფაილში ჩაწერილია")
