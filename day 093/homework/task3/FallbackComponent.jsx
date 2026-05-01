import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
        <h2>{error.message}</h2>
        <button onClick={resetErrorBoundary}>Retry</button>
        </div>
    );
}