-- 5) შექმენით database fitness. შექმენით Table Aura სადაც იქნება id INT primary key IDENTITY(1,1) NOT NULL, username VARCHAR(25), questions INT, pushup INT, classwork INT. დაამატეთ მინიმუმ 5 მოსწავლე. ბოლოს SELECT * FROM Aura order by classwork desc გამოიყენეთ და დაალაგეთ classwork-ის მიხედვით. კომენტარებში ახსენით რა არის primary key/

CREATE DATABASE fitness;

USE fitness;

CREATE TABLE Aura (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    username VARCHAR(25),
    questions INT,
    pushup INT,
    classwork INT
);

INSERT INTO Aura (username, questions, pushup, classwork)
VALUES
('Giorgi', 15, 30, 95),
('Nika', 20, 40, 88),
('Luka', 18, 35, 99),
('Saba', 25, 50, 91),
('Data', 12, 25, 85);

SELECT *
FROM Aura
ORDER BY classwork DESC;