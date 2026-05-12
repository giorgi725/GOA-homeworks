import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// BrowserRouter საჭიროა იმისთვის,
// რომ React აპლიკაციაში URL-ების მიხედვით გვერდებს შორის გადავიდეთ
// გვერდის გადატვირთვის გარეშე.

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);