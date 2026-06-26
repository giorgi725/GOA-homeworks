-- 4) შექმენით database shop. შექმენით Table Products სადაც იქნება id INT primary key IDENTITY(1,1) NOT NULL, productName VARCHAR(30), price INT, quantity INT. დაამატეთ მინიმუმ 5 პროდუქტი INSERT INTO ბრძანებით. ბოლოს SELECT * FROM Products order by price asc გამოიყენეთ და დაალაგეთ ფასის ზრდადობით

CREATE DATABASE shop;

USE shop;

CREATE TABLE Products (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    productName VARCHAR(30),
    price INT,
    quantity INT
);

INSERT INTO Products (productName, price, quantity)
VALUES
('Laptop', 2500, 10),
('Mouse', 50, 100),
('Keyboard', 120, 50),
('Monitor', 800, 20),
('Headphones', 200, 30);

SELECT *
FROM Products
ORDER BY price ASC;