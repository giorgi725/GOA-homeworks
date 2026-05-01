import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
        hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.log("Error:", error);
        console.log("Component Stack:", info.componentStack);
    }

    resetError = () => {
        this.setState({
        hasError: false
        });
    };

    render() {
        if (this.state.hasError) {
        return (
            <div>
            <h2>{this.props.message || "Something went wrong"}</h2>
            <button onClick={this.resetError}>Retry</button>
            </div>
        );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;