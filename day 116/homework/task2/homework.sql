-- 3) შექმენით database academy. შექმენით Table Members სადაც იქნება id INT primary key IDENTITY(1,1) NOT NULL, name VARCHAR(25), age INT, score INT. დაამატეთ 4 წევრი. ბოლოს SELECT * FROM Members order by score desc გამოიყენეთ და დაალაგეთ score-ის მიხედვით კლებადობით. კომენტარებში ახსენით რა არის table

CREATE DATABASE academy;

USE academy;

CREATE TABLE Members (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    name VARCHAR(25),
    age INT,
    score INT
);

INSERT INTO Members (name, age, score)
VALUES
('Giorgi', 16, 95),
('Nika', 17, 88),
('Luka', 15, 99),
('Saba', 18, 91);

SELECT * 
FROM Members
ORDER BY score DESC;