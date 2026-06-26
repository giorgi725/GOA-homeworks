CREATE DATABASE CSGO_Skins;

USE CSGO_Skins;

CREATE TABLE playerStats (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    skin VARCHAR(20),
    price DECIMAL(10)
);

INSERT INTO playerStats (id, username, skin, price)
VALUES
(1, 'S1mple', 'smth1', 789),
(2, 'S1mple', 'smth2', 859),
(3, 'S1mple', 'smth3', 998),
(4, 'Donk', 'smth4', 979),
(5, 'Donk', 'smth5', 879);

SELECT *FROM playerStats WHERE price > 1000;