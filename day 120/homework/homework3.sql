-- 4) შექმენით database shop და Table Products: id INT primary key IDENTITY(1,1), productName VARCHAR(30), price INT, quantity INT. დაამატეთ 5 პროდუქტი. გამოიტანეთ Products order by price asc

create DATABASE shop;

CREATE TABLE products (
    id INT PRIMARY KEY IDENTITY(1,1), 
    productName VARCHAR(30), 
    price INT, 
    quantity INT
);

INSERT INTO products (productname, price, quantity) VALUES 
('Laptop', 2500, 10), 
('Mouse', 50, 30), 
('Keyboard', 120, 20), 
('Monitor', 700, 15), 
('Headphones', 200, 25);

SELECT * FROM Products ORDER BY price ASC

-- Table არის მონაცემთა ბაზის ობიექტი, სადაც ინფორმაცია ინახება
-- სვეტებისა (Columns) და რიგების (Rows) სახით.