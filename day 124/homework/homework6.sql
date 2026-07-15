-- 7) შექმენით database office და use office. Table Departments: id INT primary key IDENTITY(1,1), departmentName VARCHAR(25). Table Employees: id INT primary key IDENTITY(1,1), employeeName VARCHAR(25), DepartmentId INT, Salary INT. დაამატეთ მონაცემები ორივე ცხრილში. JOIN-ის გამოყენებით გამოიტანეთ თანამშრომლის სახელი, ხელფასი და დეპარტამენტის სახელი. შემდეგ GROUP BY DepartmentId-ის გამოყენებით გამოიტანეთ თითოეული დეპარტამენტის ხელფასების ჯამი. კომენტარში ახსენით JOIN და GROUP BY

CREATE DATABASE office;

-- USE office;

CREATE TABLE Departments (
    id INT PRIMARY KEY IDENTITY(1,1),
    departmentName VARCHAR(25)
);

CREATE TABLE Employees (
    id INT PRIMARY KEY IDENTITY(1,1),
    employeeName VARCHAR(25),
    DepartmentId INT,
    Salary INT
);

INSERT INTO Departments (departmentName)
VALUES
('IT'),
('HR'),
('Finance');

INSERT INTO Employees (employeeName, DepartmentId, Salary)
VALUES
('Luka', 1, 3000),
('Giorgi', 1, 3500),
('Nika', 2, 2500),
('Ana', 2, 2800),
('Mari', 3, 4000),
('Saba', 3, 4500);


SELECT 
    Employees.employeeName,
    Employees.Salary,
    Departments.departmentName
FROM Employees
JOIN Departments
ON Employees.DepartmentId = Departments.id;

SELECT
    DepartmentId,
    SUM(Salary) AS Department_Budget
FROM Employees
GROUP BY DepartmentId;

