import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

export default function App() {
    return (
        <div>
        <h1>Error Boundary Test</h1>
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
        </div>
    );
}

// რატომ მუშაობს მხოლოდ class კომპონენტში?
// რადგან იყენებს lifecycle მეთოდებს 
// ეს მეთოდები function component-ში არ არსებობს

//  რა ტიპის შეცდომებს იჭერს?
// - render-ის დროს
// - constructor-ში

//  რა ტიპის შეცდომებს ვერ იჭერს?
// - event handler
// - async კოდი