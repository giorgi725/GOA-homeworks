// 3) ახსენით რა არის Buffer Module, რისთვის გამოიყენება (binary data), როგორ იქმნება Buffer (alloc, from) და როგორ იკითხება მასში მონაცემები. აღწერეთ encoding-იც (utf-8)

// Buffer არის Node.js-ის core მოდული, რომელიც გამოიყენება binary data-ის (ბინარული მონაცემების) დასამუშავებლად.

// Buffer.alloc()

// const buf = Buffer.alloc(10);

// console.log(buf);

// Buffer.from()

// const buf = Buffer.from('hello');

// console.log(buf);

// toString()
// const buf = Buffer.from('hello');

// console.log(buf.toString());


// ინდექსით წვდომა

// Buffer არის array-ს მსგავსი:

// const buf = Buffer.from('hello');

// console.log(buf[0]); 
// console.log(buf[1]); 

// Encoding არის წესების სისტემა, რომელიც განსაზღვრავს:

// როგორ გადაიქცეს ტექსტი binary მონაცემებად და პირიქით


// თითო სიმბოლოს გადააქცევს ბაიტებად
// მხარს უჭერს ყველა ენას (ქართული, ინგლისური, ჩინური და ა.შ.)

// const buf = Buffer.from('გიორგი', 'utf8');

// console.log(buf);
// console.log(buf.toString('utf8'));