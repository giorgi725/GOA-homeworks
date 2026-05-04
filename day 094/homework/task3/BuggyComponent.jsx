import { useState } from "react";

export default function BuggyComponent({ trigger }) {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("Library Crash");
    }

    return (
        <div>
        <h3>Buggy Component</h3>
        <button onClick={() => setCrash(true)}>
            Crash
        </button>

        <p>Trigger value: {trigger}</p>
        </div>
    );
}