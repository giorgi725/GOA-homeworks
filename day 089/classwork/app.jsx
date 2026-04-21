import React, {useEffect, useState}from "react";
import './App.css'
import useToggle from "./usetoogle";

function App() {
    const [darkmode, toggleDarkMode] = useToggle();

    return (
        <div className={darkmode ? "dark" : "light"}>
        <button onClick={toggleDarkMode}>
            {darkmode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
    );
}

export default App;

import { useState } from "react";

export default function useToggle() {
    const [state, setState] = useState(false);
    const toggle = () => {setState(prev => !prev)};

    return [state, toggle];
}
// body, .dark, .light{
//   height: 100vh;
// }
// .dark {
//   background-color: #000000;
//   color: white;
// }

// .light {
//   background-color: white;
// }