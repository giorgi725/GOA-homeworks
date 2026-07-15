-- 3) შექმენით database library და use library. Table Books: id INT primary key IDENTITY(1,1), bookName VARCHAR(30), author VARCHAR(25), genre VARCHAR(25), pages INT. დაამატეთ 6 წიგნი. გამოიტანეთ მხოლოდ ის წიგნები, რომელთა genre არის IN ('Drama', 'Fantasy', 'History'). შემდეგ მოძებნეთ bookName LIKE '%a%'. კომენტარში ახსენით IN და LIKE

-- CREATE DATABASE library;

-- USE library;

CREATE TABLE Books (
    id INT PRIMARY KEY IDENTITY(1,1),
    bookName VARCHAR(30),
    author VARCHAR(25),
    genre VARCHAR(25),
    pages INT
);

INSERT INTO Books (bookName, author, genre, pages)
VALUES
('Hamlet', 'Shakespeare', 'Drama', 250),
('Harry Potter', 'J.K. Rowling', 'Fantasy', 500),
('Sapiens', 'Yuval Noah', 'History', 420),
('The Hobbit', 'Tolkien', 'Fantasy', 310),
('Macbeth', 'Shakespeare', 'Drama', 220),
('Clean Code', 'Robert Martin', 'Programming', 450);

SELECT *
FROM Books
WHERE genre IN ('Drama', 'Fantasy', 'History');

SELECT *
FROM Books
WHERE bookName LIKE '%a%';