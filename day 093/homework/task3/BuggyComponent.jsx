import React, { useState } from "react";

export default function BuggyComponent({ trigger }) {
    if (trigger) {
        throw new Error("Crash from library");
    }

    return <h3>Everything is fine</h3>;
}