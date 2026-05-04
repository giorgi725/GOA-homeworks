import { useState } from "react";

export default function BuggyOne() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("BuggyOne Crash");
    }

    return (
        <div>
        <button onClick={() => setCrash(true)}>
            Crash One
        </button>
        </div>
    );
}