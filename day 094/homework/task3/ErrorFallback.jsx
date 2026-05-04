export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
        <h2>Error UI</h2>
        <p>{error.message}</p>

        <button onClick={resetErrorBoundary}>
            Retry
        </button>
        </div>
    );
}