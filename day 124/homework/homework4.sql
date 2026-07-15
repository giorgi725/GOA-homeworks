-- 5) შექმენით database club და use club. Table Players: id INT primary key IDENTITY(1,1), playerName VARCHAR(25), team VARCHAR(25), points INT. დაამატეთ 6 მოთამაშე. გამოიტანეთ playerName LOWER ფორმატში და team UPPER ფორმატში. შემდეგ მოძებნეთ ის მოთამაშეები, რომელთა team LIKE 'd%'. კომენტარში ახსენით LOWER, UPPER და LIKE

-- CREATE DATABASE club;

-- USE club;


CREATE TABLE Players (
    id INT PRIMARY KEY IDENTITY(1,1),
    playerName VARCHAR(25),
    team VARCHAR(25),
    points INT
);

INSERT INTO Players (playerName, team, points)
VALUES
('Messi', 'dreamers', 30),
('Ronaldo', 'dragons', 28),
('Neymar', 'eagles', 22),
('Mbappe', 'dynamos', 35),
('Haaland', 'tigers', 32),
('Saka', 'dolphins', 20);

SELECT
    LOWER(playerName) AS PlayerName,
    UPPER(team) AS Team
FROM Players;

SELECT *
FROM Players
WHERE team LIKE 'd%';