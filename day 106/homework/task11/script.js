// 12) დაწერეთ მოკლე Review, სადაც აღწერთ:
// - როგორ მუშაობს errors handling Node.js-ში  
// - რა არის Buffer და სად გამოიყენება  
// - როგორ მუშაობს FS module  
// - როგორ შეიძლება მათი ერთად გამოყენება (მაგ. ფაილის წაკითხვა → buffer → error handling) პატარა აპლიკაციებში

// Node.js-ში error handling აუცილებელია, რადგან ბევრი ოპერაცია (ფაილები, network, streams) ასინქრონულია.

// ძირითადი მეთოდებია:

// try/catch - synchronous კოდისთვის
// callback(err, data) - asynchronous FS ოპერაციებისთვის
// process.on("uncaughtException") - დაუმუშავებელი critical error-ებისთვის


// Buffer არის Node.js-ში binary data-ის (ბაიტების) container.

// გამოიყენება როცა ვმუშაობთ:

// ფაილებთან
// streams-თან
// network data-თან

// ძირითადი მეთოდები:

// Buffer.from() - ტექსტიდან Buffer-ის შექმნა
// Buffer.alloc() - ცარიელი მეხსიერების შექმნა
// toString() - Buffer → ტექსტი


// FS (File System) module გამოიყენება ფაილებთან სამუშაოდ:

// ოპერაციები:

// readFile() - წაკითხვა
// writeFile() - ჩაწერა
// appendFile() - დამატება
// rename() - სახელის შეცვლა
// unlink() - წაშლა

// FS-ს აქვს:

// sync version - ბლოკავს პროგრამას
// async version - არ ბლოკავს (Node.js-ის სტილი)