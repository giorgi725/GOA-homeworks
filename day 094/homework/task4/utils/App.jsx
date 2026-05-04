import ErrorBoundary from "./ErrorBoundary";
import BuggyOne from "./BuggyOne";
import BuggyTwo from "./BuggyTwo";

export default function App() {
    return (
        <div>
        <h1>Global Error Logging Test</h1>

        <ErrorBoundary>
            <BuggyOne />
        </ErrorBoundary>

        <hr />

        <ErrorBoundary>
            <BuggyTwo />
        </ErrorBoundary>
        </div>
    );
}

// რატომ არის error logging მნიშვნელოვანი production-ში?

// - user ვერ გეტყვის რა მოხდა
// - error-ები ავტომატურად ინახება
// - შეგიძლია ნახო რა crash-ები ხდება რეალურ მომხმარებლებთან
// - აპლიკაციის სტაბილურობას ზრდის

// როგორ ეხმარება debugging-ს?

// - ხედავ exact error message-ს
// - ხედავ stack trace-ს (სად მოხდა)
// - მარტივად პოულობ bug-ს

// რა განსხვავებაა UI fallback-სა და error monitoring-ს შორის?

// UI fallback:
// - რაც user-ს უჩანს (Error screen)
// - UX-ს იცავს

// Error monitoring:
// - backend/logging სისტემა
// - developer-ს ეხმარება bug-ის პოვნაში