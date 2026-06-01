// 7) გაეცანით OS module-ის მონაცემებს: platform, arch, cpus, freemem, totalmem. დაწერეთ პროგრამა, რომელიც აჩვენებს ამ მონაცემებს ფორმატირებულად

// Node.js-ის OS Module გვაძლევს ინფორმაციას ოპერაციული სისტემის შესახებ. მის გამოსაყენებლად საჭიროა მოდულის იმპორტი:

// const os = require('os');


// os.platform()

// აბრუნებს ოპერაციული სისტემის პლატფორმას.

// console.log(os.platform());

// os.arch()

// აბრუნებს პროცესორის არქიტექტურას.

// console.log(os.arch());

// os.cpus()

// აბრუნებს პროცესორების შესახებ ინფორმაციას.

// console.log(os.cpus().length);

// .length გვაძლევს CPU ბირთვების რაოდენობას.

// os.totalmem()

// აბრუნებს ოპერატიული მეხსიერების (RAM) მთლიან მოცულობას ბაიტებში.

// console.log(os.totalmem());

// os.freemem()

// აბრუნებს თავისუფალ RAM-ს ბაიტებში.

// console.log(os.freemem());


// platform() — ოპერაციული სისტემის ტიპი
// arch() — პროცესორის არქიტექტურა
// cpus() — CPU ბირთვების რაოდენობა
// totalmem() — RAM-ის სრული მოცულობა
// freemem() — თავისუფალი RAM