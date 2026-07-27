-- 3) შექმენით database airport და use airport. Table Flights: id INT primary key IDENTITY(1,1), destination VARCHAR(30), airline VARCHAR(25), passengers INT. დაამატეთ 8 რეისი. GROUP BY airline-ის გამოყენებით გამოიტანეთ თითოეული ავიაკომპანიის მგზავრების რაოდენობის ჯამი Total_Passengers სახელით. შემდეგ გამოიტანეთ მხოლოდ ის ავიაკომპანიები, რომელთა მგზავრების რაოდენობა HAVING-ის გამოყენებით 300-ზე მეტია. ბოლოს დაალაგეთ შედეგი Total_Passengers-ის კლებადობით. კომენტარში ახსენით GROUP BY, HAVING და ORDER BY

-- CREATE DATABASE airport;
-- GO

-- CREATE TABLE Flights (
--     id INT PRIMARY KEY IDENTITY(1,1),
--     destination VARCHAR(30),
--     airline VARCHAR(25),
--     passengers INT
-- );

-- INSERT INTO Flights (destination, airline, passengers)
-- VALUES
-- ('London', 'Lufthansa', 120),
-- ('Paris', 'Lufthansa', 200),
-- ('Berlin', 'Turkish Airlines', 180),
-- ('Rome', 'Turkish Airlines', 150),
-- ('Madrid', 'Qatar Airways', 220),
-- ('Dubai', 'Qatar Airways', 140),
-- ('Amsterdam', 'Emirates', 90),
-- ('Vienna', 'Emirates', 110);

-- SELECT
--     airline,
--     SUM(passengers) AS Total_Passengers
-- FROM Flights
-- GROUP BY airline
-- HAVING SUM(passengers) > 300
-- ORDER BY Total_Passengers DESC;