import React, { useState } from "react";

export function BuggyOne() {
    const [crash, setCrash] = useState(false);

    if (crash) throw new Error("BuggyOne exploded");

    return <button onClick={() => setCrash(true)}>Crash One</button>;
}