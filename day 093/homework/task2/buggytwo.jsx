import React, { useState } from "react";

export default function BuggyTwo() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("BuggyTwo crashed");
    }

    return (
        <div>
        <h3>Buggy Component 2</h3>
        <button onClick={() => setCrash(true)}>
            Crash Two
        </button>
        </div>
    );
}