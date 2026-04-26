import React from "react";

export default function Component3({ user }) {
    return (
        <div>
        <h2>Name: {user.name}</h2>
        <h3>Age: {user.age}</h3>
        </div>
    );
}