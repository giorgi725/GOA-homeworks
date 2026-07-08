-- 5) შექმენით database fitness და Table Aura: id INT primary key IDENTITY(1,1), username VARCHAR(25), questions INT, pushup INT, classwork INT. დაამატეთ 5 მოსწავლე. დაალაგეთ classwork desc. ახსენით primary key

CREATE DATABASE fitness;

CREATE table Aura (
    id INT primary key IDENTITY(1,1),
    username VARCHAR(25),
    questions INT, 
    pushup INT, 
    classwork INT
)

INSERT INTO Aura (username, questions, pushup, classwork) VALUES 
('Giorgi', 15, 30, 95), 
('Nika', 12, 25, 88), 
('Luka', 20, 40, 100), 
('Saba', 10, 20, 80), 
('Data', 18, 35, 92); 

SELECT * FROM Aura ORDER BY classwork DESC;