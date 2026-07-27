-- 4) შექმენით database hospital და use hospital. Table Doctors: id INT primary key IDENTITY(1,1), doctorName VARCHAR(25), departmentId INT. Table Departments: id INT primary key IDENTITY(1,1), departmentName VARCHAR(25). დაამატეთ მონაცემები ორივე ცხრილში. JOIN-ის გამოყენებით გამოიტანეთ ექიმის სახელი და დეპარტამენტის სახელი. შემდეგ GROUP BY departmentName-ის გამოყენებით დაითვალეთ თითოეულ დეპარტამენტში რამდენი ექიმია Doctors_Count სახელით. HAVING-ის გამოყენებით დატოვეთ მხოლოდ ის დეპარტამენტები, სადაც 2-ზე მეტი ექიმია. კომენტარში ახსენით JOIN, COUNT, GROUP BY და HAVING

CREATE TABLE Departments (
    id INT PRIMARY KEY IDENTITY(1,1),
    departmentName VARCHAR(25)
);

CREATE TABLE Doctors (
    id INT PRIMARY KEY IDENTITY(1,1),
    doctorName VARCHAR(25),
    departmentId INT
);

INSERT INTO Departments (departmentName)
VALUES
('Cardiology'),
('Neurology'),
('Surgery'),
('Pediatrics');

INSERT INTO Doctors (doctorName, departmentId)
VALUES
('Giorgi', 1),
('Nika', 1),
('Luka', 1),
('Ana', 2),
('Mariam', 2),
('Dato', 3),
('Nino', 4),
('Saba', 4),
('Tornike', 4);

SELECT
    d.doctorName,
    dp.departmentName
FROM Doctors d
JOIN Departments dp
    ON d.departmentId = dp.id;

SELECT
    dp.departmentName,
    COUNT(d.id) AS Doctors_Count
FROM Doctors d
JOIN Departments dp
    ON d.departmentId = dp.id
GROUP BY dp.departmentName
HAVING COUNT(d.id) > 2;


-- DISTINCT გამოიყენება SQL-ში იმისთვის, რომ შედეგებიდან დუბლირებული (განმეორებული) მნიშვნელობები მოაშოროს და მხოლოდ უნიკალური მნიშვნელობები დააბრუნოს.