-- 3) database company-ში შექმენით collection Employees. ჯერ insertOne() ბრძანებით დაამატეთ ერთი თანამშრომელი (fullName, position, age, salary), შემდეგ insertMany() ბრძანებით დაამატეთ კიდევ 4 თანამშრომელი. find() მეთოდით გამოიტანეთ თანამშრომლები, რომელთა salary არის 2500-ზე მეტი. კომენტარში ახსენით რა განსხვავებაა insertOne()-სა და insertMany()-ს შორის.

-- db.Employees.insertOne({
--     fullName: "Giorgi Beridze",
--     position: "Manager",
--     age: 35,
--     salary: 3000
-- })

-- db.Employees.insertMany([
--     {
--         fullName: "Nika Japaridze",
--         position: "Developer",
--         age: 27,
--         salary: 2800
--     },
--     {
--         fullName: "Luka Gelashvili",
--         position: "Designer",
--         age: 24,
--         salary: 2200
--     },
--     {
--         fullName: "Ana Kapanadze",
--         position: "Accountant",
--         age: 31,
--         salary: 2600
--     },
--     {
--         fullName: "Mariam Dolidze",
--         position: "HR Specialist",
--         age: 29,
--         salary: 2000
--     }
-- ])


-- db.Employees.find({
--     salary: { $gt: 2500 }
-- })