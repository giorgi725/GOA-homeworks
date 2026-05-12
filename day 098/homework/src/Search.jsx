import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Search() {
    /*
        useSearchParams მუშაობს query parameter-ებთან.
    */

    const [searchParams, setSearchParams] = useSearchParams();

    const [text, setText] = useState("");

    const query = searchParams.get("query");

    const handleSearch = () => {
        setSearchParams({
        query: text,
        });
    };

    return (
        <div>
        <h1>Search Page</h1>

        <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleSearch}>
            Search
        </button>

        <h2>
            You searched for: {query}
        </h2>

        {/*
            Query parameter არის URL-ის დამატებითი ინფორმაცია.
        */}
        </div>
    );
}

export default Search;