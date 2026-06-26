-- 2) შექმენით database goa. გამოიყენეთ use goa. შექმენით Table Students სადაც იქნება id INT primary key IDENTITY(1,1) NOT NULL, username VARCHAR(25), questions INT, classwork INT. დაამატეთ მინიმუმ 5 სტუდენტი INSERT INTO ბრძანებით. ბოლოს SELECT * FROM Students გამოიყენეთ და დაბეჭდეთ ყველა სტუდენტი. კომენტარებში ახსენით რა არის database

CREATE DATABASE goa;

USE goa;

CREATE TABLE Students (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    username VARCHAR(25),
    questions INT,
    classwork INT
);

INSERT INTO Students (username, questions, classwork)
VALUES
('Giorgi', 15, 10),
('Nika', 20, 18),
('Luka', 12, 9),
('Saba', 25, 22),
('Data', 18, 14);

SELECT * FROM Students;