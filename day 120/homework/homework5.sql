-- 6) შექმენით database school და Table Exams: id INT primary key IDENTITY(1,1), studentName VARCHAR(25), subject VARCHAR(25), grade INT. დაამატეთ 5 ჩანაწერი და გამოიტანეთ სრული ცხრილი. ახსენით SQL

CREATE DATABASE school;

CREATE TABLE Exams (
    id INT primary key IDENTITY(1,1), 
    studentName VARCHAR(25), 
    subject VARCHAR(25), 
    grade INT
)

INSERT INTO Exams (studentName, subject, grade) VALUES 
('Giorgi', 'Math', 95), 
('Nika', 'English', 88), 
('Luka', 'Physics', 100), 
('Saba', 'History', 82), 
('Data', 'Biology', 91); 

SELECT * FROM Exams;

-- SQL (Structured Query Language) არის ენა, რომელიც გამოიყენება 
-- მონაცემთა ბაზების შექმნის, მართვისა და მონაცემებთან მუშაობისთვის.