// 20) დაწერეთ მოკლე Review, სადაც აღწერთ:
// - როგორ მუშაობს events module  
// - როგორ გამოიყენება stdin/stdout  
// - როგორ შეიძლება მათი ერთად გამოყენება პატარა აპლიკაციებში

// Node.js-ში events მოდული გაძლევს საშუალებას იმუშაო Event-driven architecture-ზე.

// მისი მთავარი კლასია EventEmitter.

// მუშაობის პრინციპი:

// ქმნი EventEmitter ობიექტს
// რეგისტრირებ listener-ს (on)
// იძახებ event-ს (emit)
// ყველა შესაბამისი listener ავტომატურად სრულდება

// stdin და stdout

// Node.js-ში:

// stdin - იღებს მომხმარებლის input-ს (კლავიატურა)
// stdout - ბეჭდავს output-ს (console.log)


// events + stdin/stdout ხშირად გამოიყენება CLI აპლიკაციებში.

// პროცესი:

// მომხმარებელი წერს input-ს (stdin)
// input გადადის EventEmitter-ში (emit)
// შესაბამისი event listener ამუშავებს მონაცემს
// შედეგი იბეჭდება (stdout)


// events module - გვაძლევს event-driven ლოგიკას
// stdin - input-ის მიღება მომხმარებლისგან
// stdout - შედეგის დაბეჭდვა
// ერთად - შეგვიძლია შევქმნათ მარტივი CLI აპლიკაციები (calculator, command handler, text processor)