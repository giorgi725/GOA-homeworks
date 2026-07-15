-- 4) შექმენით database market და use market. Table Orders: id INT primary key IDENTITY(1,1), customerName VARCHAR(25), product VARCHAR(30), price INT, amount INT. დაამატეთ 6 შეკვეთა. გამოიტანეთ შეკვეთების COUNT, price-ის SUM და AVG. კომენტარში ახსენით aggregation, SUM, COUNT და AVG

-- CREATE DATABASE market;

-- USE market;

CREATE TABLE Orders (
    id INT PRIMARY KEY IDENTITY(1,1),
    customerName VARCHAR(25),
    product VARCHAR(30),
    price INT,
    amount INT
);

INSERT INTO Orders (customerName, product, price, amount)
VALUES
('Giorgi', 'Laptop', 2500, 1),
('Nika', 'Phone', 1200, 2),
('Luka', 'Keyboard', 150, 3),
('Saba', 'Mouse', 80, 5),
('Mari', 'Monitor', 700, 1),
('Ana', 'Headphones', 200, 2);

SELECT COUNT(*) AS TotalOrders
FROM Orders;

SELECT SUM(price) AS TotalPrice
FROM Orders;

SELECT AVG(price) AS AveragePrice
FROM Orders;