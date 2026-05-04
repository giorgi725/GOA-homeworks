import { useState } from "react";

export default function BuggyTwo() {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("BuggyTwo Explosion");
    }

    return (
        <div>
        <button onClick={() => setCrash(true)}>
            Crash Two
        </button>
        </div>
    );
}