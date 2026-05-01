import React, { useState } from "react";

export function BuggyTwo() {
    const [crash, setCrash] = useState(false);

    if (crash) throw new Error("BuggyTwo failed");

    return <button onClick={() => setCrash(true)}>Crash Two</button>;
}