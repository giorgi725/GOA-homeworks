import ErrorBoundary from "./ErrorBoundary";
import BuggyOne from "./BuggyOne";
import BuggyTwo from "./BuggyTwo";

export default function App() {
    return (
        <div>
        <h1>Error Boundary Advanced Test</h1>
        <ErrorBoundary message="Buggy One failed!">
            <BuggyOne />
        </ErrorBoundary>

        <hr />

        <ErrorBoundary message="Buggy Two failed!">
            <BuggyTwo />
        </ErrorBoundary>
        </div>
    );
}

// რატომ არის კარგი თითოეული risky კომპონენტის გარშემო ცალკე boundary?

// რადგან:
// - ერთი კომპონენტის crash არ აგდებს მთელ აპლიკაციას
// - იზოლაცია ხდება error-ების
// - უფრო სტაბილური UI გვაქვს

// როგორ აუმჯობესებს UX-ს reset ღილაკი?

// - user-ს შეუძლია თავიდან სცადოს
// - აღარ სჭირდება გვერდის refresh