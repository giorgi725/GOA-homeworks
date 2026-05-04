import { useState } from "react";

export default function BuggyTwo() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("BuggyTwo exploded");
    }

    return (
        <div>
        <h3>Buggy Two</h3>
        <button onClick={() => setCrash(true)}>
            Crash Two
        </button>
        </div>
    );
}