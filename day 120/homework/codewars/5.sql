-- https://www.codewars.com/kata/591127cbe8b9fb05bd00004b

-- Your Code Here
SELECT name, author, copies_sold
FROM books
ORDER BY copies_sold DESC
LIMIT 5;