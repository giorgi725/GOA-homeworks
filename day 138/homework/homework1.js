// 1) ახსენით, რატომ არის საჭირო 'credentials: "include"' Cookie-based Authentication-ის დროს. აღწერეთ რა ხდება Browser-სა და Server-ს შორის Request-ის გაგზავნისას და რა მოხდება, თუ 'credentials: "include"' არ გამოვიყენებთ

// რატომ არის საჭირო credentials: "include"

// Cookie-based Authentication-ის დროს მომხმარებლის ავტორიზაციის ინფორმაცია ინახება Cookie-ში. როდესაც Frontend აგზავნის Request-ს Server-ზე, Browser-მა ეს Cookie უნდა გააგზავნოს Request-თან ერთად, რათა Server-მა მომხმარებლის იდენტიფიკაცია შეძლოს.

// ამისთვის fetch() ფუნქციაში გამოიყენება:

// fetch("http://localhost:3000/api/user/profile", {
//   method: "GET",
//   credentials: "include"
// })
// რა ხდება Browser-სა და Server-ს შორის
// მომხმარებელი შედის სისტემაში (Login).
// Server აგზავნის Cookie-ს Set-Cookie Header-ის საშუალებით.
// Browser ინახავს ამ Cookie-ს.
// შემდგომ Request-ებზე Browser აგზავნის Cookie-ს Server-ზე, თუ გამოყენებულია credentials: "include".
// Server კითხულობს Cookie-ს, ამოწმებს Token-ს და ადგენს მომხმარებლის ვინაობას.
// რა მოხდება, თუ credentials: "include" არ გამოვიყენებთ

// თუ Request-ში credentials: "include" არ იქნება მითითებული:

// Browser არ გააგზავნის Cookie-ს Server-ზე.
// Server ვერ მიიღებს Authentication Token-ს.
// მომხმარებელი ჩაითვლება არაავტორიზებულად.
// დაცული Route-ები დააბრუნებს 401 Unauthorized ან 403 Forbidden შეცდომას.
// ავტორიზაცია ვერ იმუშავებს მიუხედავად იმისა, რომ Cookie Browser-ში შენახულია.
// უპირატესობები
// Server იღებს მომხმარებლის ავტორიზაციის მონაცემებს ავტომატურად.
// დაცული Route-ები მუშაობს სწორად.
// მომხმარებელს არ სჭირდება Token-ის ხელით გაგზავნა Request Body-ში.
// იზრდება აპლიკაციის უსაფრთხოება.
// მარტივდება Authentication-ის მართვა Frontend-სა და Backend-ს შორის.