-- 7) შექმენით database AutoShop და Table Cars: id INT primary key IDENTITY(1,1), carName VARCHAR(30), brand VARCHAR(25), price INT. დაამატეთ 5 მანქანა. დაალაგეთ price desc. ახსენით order by, asc და desc

CREATE DATABASE AutoShop;

CREATE table Cars (
    id INT primary key IDENTITY(1,1), 
    carName VARCHAR(30),
    brand VARCHAR(25), 
    price INT
)

insert into Cars (carName, brand, price) VALUES
('BMW', 'Cars', 95), 
('Mercedes', 'Cars', 90), 
('Audi', 'Cars', 88), 
('Toyota', 'Cars', 85), 
('Honda', 'Cars', 92);

SELECT * FROM Cars ORDER BY price DESC;

-- ORDER BY გამოიყენება მონაცემების დასალაგებლად. 
-- ASC (Ascending) ალაგებს ზრდადობით (მცირედან დიდისკენ). 
-- DESC (Descending) ალაგებს კლებადობით (დიდიდან მცირისკენ).