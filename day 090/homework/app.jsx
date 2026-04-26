import React, { useState } from "react";
import Component1 from "./Component1";

function App() {
    const [user, setUser] = useState({ name: "gio", age: 17 });

    return (
        <div>
        <Component1 user={user} />
        </div>
    );
}

export default App;