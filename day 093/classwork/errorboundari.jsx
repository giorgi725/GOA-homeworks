import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    static componentDitCatch(error, info){
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <p>Fallback UI..</p>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary