import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
    return (
        <ErrorBoundary>
        <BuggyComponent />
        </ErrorBoundary>
    );
}

export default App;