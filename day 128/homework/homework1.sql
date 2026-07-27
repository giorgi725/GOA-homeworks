-- 2) შექმენით database university და use university. Table Students: id INT primary key IDENTITY(1,1), studentName VARCHAR(25), faculty VARCHAR(25), scholarship INT. დაამატეთ 8 სტუდენტი. GROUP BY faculty-ის გამოყენებით გამოიტანეთ თითოეული ფაკულტეტის სტიპენდიების ჯამი Total_Scholarship სახელით. HAVING-ის გამოყენებით დატოვეთ მხოლოდ ის ფაკულტეტები, სადაც სტიპენდიების ჯამი 2000-ზე მეტია. კომენტარში ახსენით GROUP BY და HAVING


-- CREATE TABLE Students (
--     id INT PRIMARY KEY IDENTITY(1,1),
--     studentName VARCHAR(25),
--     faculty VARCHAR(25),
--     scholarship INT
-- );

-- INSERT INTO Students (studentName, faculty, scholarship)
-- VALUES
-- ('Giorgi', 'Computer Science', 800),
-- ('Nika', 'Computer Science', 700),
-- ('Luka', 'Business', 600),
-- ('Ana', 'Business', 500),
-- ('Mariam', 'Medicine', 1200),
-- ('Saba', 'Medicine', 1000),
-- ('Nino', 'Law', 900),
-- ('Dato', 'Law', 800);

-- SELECT
--     faculty,
--     SUM(scholarship) AS Total_Scholarship
-- FROM Students
-- GROUP BY faculty
-- HAVING SUM(scholarship) > 2000;