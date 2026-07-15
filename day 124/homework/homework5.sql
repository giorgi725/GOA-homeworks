-- 6) შექმენით database company და use company. Table Employees: id INT primary key IDENTITY(1,1), employeeName VARCHAR(25), ManagerId INT, Salary INT. დაამატეთ 6 თანამშრომელი. GROUP BY ManagerId-ის გამოყენებით გამოიტანეთ თითოეული მენეჯერის თანამშრომლების ხელფასების ჯამი Manager_Budget სახელით. კომენტარში ახსენით GROUP BY და SUM

CREATE DATABASE company;

-- USE company;

CREATE TABLE Employees (
    id INT PRIMARY KEY IDENTITY(1,1),
    employeeName VARCHAR(25),
    ManagerId INT,
    Salary INT
);

INSERT INTO Employees (employeeName, ManagerId, Salary)
VALUES
('Luka', 1, 2500),
('Giorgi', 1, 3000),
('Nika', 2, 2200),
('Ana', 2, 2800),
('Mari', 3, 3500),
('Saba', 3, 2700);

SELECT 
    ManagerId,
    SUM(Salary) AS Manager_Budget
FROM Employees
GROUP BY ManagerId;

