// 10) შექმენით მოკლე რეზიუმე/სექცია Review-ისთვის, სადაც აღწერთ Node.js-ის ძირითადი შესაძლებლობების მიმოხილვას და იმ გზებს, რომლითაც შეგიძლიათ გამოიყენოთ core modules პრაქტიკაში

// Node.js არის JavaScript-ის გაშვების გარემო (Runtime Environment), რომელიც საშუალებას გვაძლევს JavaScript გამოვიყენოთ სერვერის მხარესაც. იგი სწრაფია, ეფექტურია და ფართოდ გამოიყენება ვებ-სერვერების, API-ების, CLI (Command Line Interface) პროგრამებისა და რეალურ დროში მომუშავე აპლიკაციების შესაქმნელად.

// Node.js-ის ძირითადი შესაძლებლობები
// JavaScript-ის გაშვება ბრაუზერის გარეთ.
// ფაილებთან და დირექტორიებთან მუშაობა.
// სერვერებისა და API-ების შექმნა.
// პროცესებისა და სისტემური რესურსების მართვა.
// ასინქრონული (Asynchronous) პროგრამირება.
// ქსელური კავშირებისა და მონაცემთა ბაზებთან მუშაობა.
// Core Modules-ის პრაქტიკული გამოყენება
// Console Module

// გამოიყენება ინფორმაციის, გაფრთხილებებისა და შეცდომების კონსოლში გამოსატანად.

// console.log("Hello World");
// console.error("Error!");
// console.warn("Warning!");
// Process Module

// გამოიყენება მიმდინარე პროცესის სამართავად და command line არგუმენტების მისაღებად.

// console.log(process.argv);
// console.log(process.env);
// process.exit(0);
// OS Module

// გვაძლევს ინფორმაციას ოპერაციული სისტემის შესახებ.

// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());
// Util Module

// გამოიყენება ტექსტისა და ობიექტების ფორმატირებისთვის და დამხმარე ფუნქციებისთვის.

// const util = require('util');

// console.log(util.format("Name: %s", "Giorgi"));
// console.log(util.inspect({ name: "Giorgi" }));