import React from "react";

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
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error:", error);
        console.log("Component Stack:", errorInfo);
        this.setState({
        error,
        errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>Something went wrong</h2>
            <p>{this.state.error && this.state.error.toString()}</p>
            </div>
        );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;