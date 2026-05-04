import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        hasError: false,
        error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error:", error);
        console.log("Stack:", errorInfo);
    }

    handleReset = () => {
        this.setState({
        hasError: false,
        error: null
        });
    };

    render() {
        if (this.state.hasError) {
        return (
            <div style={{ padding: "20px", border: "1px solid red" }}>
            <h2>{this.props.message || "Something went wrong"}</h2>

            <p>{this.state.error && this.state.error.toString()}</p>
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