import { useState, useEffect } from "react";
import React from "react";

export default function lybrary() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [library, setLibrary] = useState([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("library") || "[]");
        setLibrary(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem("library", JSON.stringify(library));
    }, [library]);
    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
        );
        const data = await res.json();
        setBooks(data.items || []);
    };
    const addToLibrary = (book) => {
        const exists = library.find((b) => b.id === book.id);
        if (exists) return;
        const newBook = {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors?.join(", "),
        thumbnail: book.volumeInfo.imageLinks?.thumbnail,
        description: book.volumeInfo.description,
        status: "unread",
        };
        setLibrary([...library, newBook]);
    };
    const toggleStatus = (id) => {
        const updated = library.map((b) =>
        b.id === id
            ? { ...b, status: b.status === "read" ? "unread" : "read" }
            : b
        );
        setLibrary(updated);
    };
    return (
        <>
        <form onSubmit={handleSearch}>
            <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        <h2>Search Results</h2>
        <div>
            {books.map((book) => (
            <div key={book.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(", ")}</p>
                {book.volumeInfo.imageLinks?.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                )}
                <p>{book.volumeInfo.description?.slice(0, 100)}...</p>
                <button onClick={() => addToLibrary(book)}>
                Add to Library
                </button>
            </div>
            ))}
        </div>
        <div>
            {library.map((book) => (
            <div key={book.id} style={{ border: "1px solid green", margin: "10px", padding: "10px" }}>
                <h3>{book.title}</h3>
                <p>{book.authors}</p>
                {book.thumbnail && <img src={book.thumbnail} alt="" />}
                <p>Status: {book.status}</p>
                <button onClick={() => toggleStatus(book.id)}>
                Mark as {book.status === "read" ? "Unread" : "Read"}
                </button>
            </div>
            ))}
        </div>
        </>
    );
}