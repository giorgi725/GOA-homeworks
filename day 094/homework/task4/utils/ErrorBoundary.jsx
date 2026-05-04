import React from "react";
import { sendErrorToServer } from "./utils/errorLogger";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        hasError: false,
        error: null,
        errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        const errorData = {
        message: error.message,
        stack: errorInfo.componentStack,
        time: Date.now()
        };

        sendErrorToServer(errorData);

        this.setState({
        errorInfo
        });
    }

    handleReset = () => {
        this.setState({
        hasError: false,
        error: null,
        errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>Error happened</h2>
            <p>{this.state.error?.message}</p>

            <button onClick={this.handleReset}>
                Retry
            </button>
            </div>
        );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;