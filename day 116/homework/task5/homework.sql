-- 6) შექმენით database school. შექმენით Table Exams სადაც იქნება id INT primary key IDENTITY(1,1) NOT NULL, studentName VARCHAR(25), subject VARCHAR(25), grade INT. დაამატეთ მინიმუმ 5 ჩანაწერი. ბოლოს SELECT * FROM Exams გამოიყენეთ და გამოიტანეთ სრული ცხრილი. კომენტარებში ახსენით რა არის relational database და რისთვის გამოიყენება SQL

CREATE DATABASE school;

USE school;

CREATE TABLE Exams (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    studentName VARCHAR(25),
    subject VARCHAR(25),
    grade INT
);

INSERT INTO Exams (studentName, subject, grade)
VALUES
('Giorgi', 'Math', 95),
('Nika', 'English', 88),
('Luka', 'Physics', 91),
('Saba', 'History', 85),
('Data', 'Biology', 97);

SELECT * FROM Exams;