import React, { useState } from "react";

export default function BuggyOne() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("BuggyOne crashed");
    }

    return (
        <div>
        <h3>Buggy Component 1</h3>
        <button onClick={() => setCrash(true)}>
            Crash One
        </button>
        </div>
    );
}