import React, { useState } from "react";

export default function BuggyComponent() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("Crash");
    }

    return (
        <div>
        <button onClick={() => setCrash(true)}>
            Click to crash
        </button>
        </div>
    );
}