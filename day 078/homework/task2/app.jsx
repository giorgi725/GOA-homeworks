// 3) შექმენით User კომპონენტი, რომელიც მიიღებს props-ით name და age მნიშვნელობებს და გამოიტანს მათ <p> ელემენტებში. App.jsx-ში გამოიყენეთ User კომპონენტი და გადაეცით თქვენი სახელი და ასაკი. კომენტარებში დაწერეთ რას ნიშნავს props-ით მონაცემების გადაცემა
import User from "./user";

function App() {
    return (
        <div>
        <User name="Giorgi" age={20} />
        </div>
    );
}

export default App;