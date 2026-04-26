import React from "react";
import Component2 from "./Component2";

export default function Component1({ user }) {
    return (
        <div>
        <Component2 user={user} />
        </div>
    );
}
