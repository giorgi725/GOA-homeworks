import React from "react";
import { sendErrorToServer } from "./logger";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        const errorPayload = {
        message: error.message,
        stack: error.stack,
        componentStack: info.componentStack,
        timestamp: Date.now()
        };

        sendErrorToServer(errorPayload);
    }

    resetError = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>Something broke</h2>
            <button onClick={this.resetError}>Retry</button>
            </div>
        );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;