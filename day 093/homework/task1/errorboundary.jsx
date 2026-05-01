// 2) შექმენით საკუთარი ErrorBoundary ნულიდან (class component).
// მოთხოვნები:
// - გამოიყენეთ constructor და შექმენით state { hasError: false }
// - გამოიყენეთ static getDerivedStateFromError
// - გამოიყენეთ componentDidCatch და დაალოგეთ error + componentStack
// - render-ში გამოიტანეთ fallback UI

// გატესტეთ:
// - შექმენით BuggyComponent, რომელიც button click-ზე აგდებს error-ს (throw new Error("Crash"))
// - ჩასვით ErrorBoundary-ის შიგნით
// - გადაამოწმეთ რომ fallback UI ჩნდება

// კომენტარებში დაწერეთ:
// - რატომ მუშაობს ErrorBoundary მხოლოდ class კომპონენტში
// - რა ტიპის შეცდომებს იჭერს (render / lifecycle / constructor)
// - რა ტიპის შეცდომებს ვერ იჭერს (event handler, async, setTimeout)

import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("Error:", error);
        console.log("Component Stack:", info.componentStack);
    }
    render() {
        if (this.state.hasError) {
        return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}
