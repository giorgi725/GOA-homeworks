-- 3) შექმენით database academy და Table Members: id INT primary key IDENTITY(1,1), name VARCHAR(25), age INT, score INT. დაამატეთ 4 წევრი. გამოიტანეთ SELECT * FROM Members order by score desc. ახსენით table

-- Table არის მონაცემთა ბაზის ნაწილი, სადაც მონაცემები ინახება 
-- სვეტებისა (Columns) და რიგების (Rows) სახით. 

CREATE DATABASE academy; 

CREATE TABLE Members ( 
    id INT PRIMARY KEY IDENTITY(1,1), 
    name VARCHAR(25), 
    age INT, 
    score INT ); 
    
INSERT INTO Members (name, age, score) VALUES 
    ('Giorgi', 16, 95), 
    ('Nika', 17, 88), 
    ('Luka', 15, 99), 
    ('Saba', 18, 91); 

SELECT * FROM Members ORDER BY score DESC;