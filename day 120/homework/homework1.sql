-- 2)შექმენით database goa და use goa. Table Students: id INT primary key IDENTITY(1,1), username VARCHAR(25), questions INT, classwork INT. დაამატეთ 5 სტუდენტი და SELECT * FROM Students. კომენტარში ახსენით database

-- Database არის ორგანიზებული მონაცემების საცავი,
-- სადაც ინფორმაცია ინახება ცხრილების სახით.  
-- Database გამოიყენება მონაცემების შესანახად, მართვისთვის და სწრაფად მოსაძებნად. 

CREATE DATABASE goa;

CREATE TABLE Students (
    id INT PRIMARY KEY IDENTITY(1,1), 
    username VARCHAR(25), 
    questions INT, 
    classwork INT 
);

INSERT INTO Students (username, questions, classwork) VALUES 
('Giorgi', 15, 90), 
('Nika', 12, 85), 
('Luka', 18, 95), 
('Saba', 10, 80), 
('Data', 20, 100); 

SELECT * FROM Students;