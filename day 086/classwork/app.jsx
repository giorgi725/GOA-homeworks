import React, { useState,useEffect } from "react";

export default function Site() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = uselocalstorage("book", [])
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.book.value;
        setSearch(value);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // 🔥 DEBUG
            setBooks(data.items || []);
        })
            .catch((err) => console.log(err));
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search book" name="book" />
            <button type="submit">Search</button>
        </form>
        <table border="1">
            <thead>
            <tr>
                <th>Authors</th>
                <th>Year</th>
                <th>Title</th>
                <th>Page Count</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book, index) => {
                const { authors, publishedDate, title, pageCount } =
                book.volumeInfo;
                return (
                <tr key={index}>
                    <td>{authors}</td>
                    <td>{publishedDate}</td>
                    <td>{title}</td>
                    <td>{pageCount}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </>
    );
}