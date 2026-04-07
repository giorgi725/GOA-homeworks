import { use, useEffect, useState } from "react";

// 2) თქვენი სიტყვებით ახსენით useEffect კაუჭი.
// აღწერეთ:
// - რა არის გვერდითი ეფექტი (side effect) React-ში
// - რა განსხვავებაა ჩვეულებრივ ლოგიკასა და useEffect-ში მოთავსებულ ლოგიკას შორის
// - როდის იძახება useEffect კომპონენტის სიცოცხლის ციკლში

// დამატებით განიხილეთ useEffect კაუჭის არგუმენტები:
// - პირველი არგუმენტი (callback ფუნქცია) – რას აკეთებს და როდის სრულდება
// - მეორე არგუმენტი (dependency array) – რისთვის გამოიყენება
// - რა მოხდება თუ dependency array საერთოდ არ გადაეცემა
// - რა მოხდება თუ dependency array ცარიელია

// ასევე დაწერეთ თუ:
// - რას აკეთებს useState
// - როდის იძახება useState
// - ჩამოწერეთ მინიმუმ 2 მაგალითი useState-ის გამოყენებაზე

// რა არის გვერდითი ეფექტი (side effect) - React-ში side effect არის ნებისმიერი ოპერაცია, რომელიც არ არის მხოლოდ UI-ის დახატვა. API-დან მონაცემების წამოღება (fetch), DOM-ზე პირდაპირი ცვლილება, event listener-ების დამატება (resize, scroll), setInterval / setTimeout

// განსხვავება ჩვეულებრივ ლოგიკასა და useEffect-ში მოთავსებულ ლოგიკას შორის
// ჩვეულებრივი:სრულდება render-ის დროს, უნდა იყოს “სუფთა” (pure), არ უნდა იწვევდეს გვერდით ეფექტებს

// useEffect-ში მოთავსებული:სრულდება render-ის შემდეგ, გამოიყენება side effect-ებისთვის, არ აფუჭებს React-ის render პროცესს

// როდის იძახება useEffect (lifecycle) - useEffect :კომპონენტის mount-ის დროს, update-ის დროს

// callback ფუნქცია: useEffect(() => {console.log("Effect worked")});

// dependency array: useEffect(() => {console.log("changed")}, [count]);

// რა მოხდება თუ dependency array ცარიელია: გაეშვება მხოლოდ ერთხელ

// რა არის useState: 
// useState არის React hook, რომელიც გამოიყენება state-ის (მდგომარეობის) შესანახად და გასაახლებლადconst [count, setCount] = useState(0);
// count - მნიშვნელობა
// setCount - ფუნქცია, რომელიც ცვლის მნიშვნელობას

// 3) შექმენით ორი კომპონენტისგან შემდგარი ვებსაიტი.

// I კომპონენტი:
// - შექმენით ფორმა
// - ყველა input-ის ცვლილებისას (onChange) განაახლეთ მდგომარეობაში შენახული ობიექტი
// - ფორმის დადასტურებისას (onSubmit) შეინახეთ ეს ობიექტი localStorage-ში string-ის სახით

// II კომპონენტი:
// - ღილაკზე დაჭერისას წამოიღეთ მონაცემები localStorage-დან
// - გადააქცევთ string-ს ობიექტად
// - თითოეული property გამოიტანეთ პარაგრაფში
// - პარაგრაფები უნდა გამოჩნდეს მხოლოდ მაშინ, თუ მნიშვნელობები ცარიელი არ არის


export default function FormComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData));
        alert("saved!");
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
        </>
    );
}


    export default function DisplayComponent() {
    const [data, setData] = useState(null);
    const handleLoad = () => {
        const stored = localStorage.getItem("user");
        if (stored) {
        const parsedData = JSON.parse(stored);
        setData(parsedData);
        }
    };
    return (
        <div>
        <button onClick={handleLoad}>Load Data</button>
        {data && (
            <div>
            {data.name && <p>Name: {data.name}</p>}
            {data.email && <p>Email: {data.email}</p>}
            {data.age && <p>Age: {data.age}</p>}
            </div>
        )}
        </div>
    );
}

// 4) თქვენი სიტყვებით ახსენით შემდეგი ცნებები:
// - state
// - hook
// - built-in hook
// - useState
// - setter function
// - component re-render

// state არის მონაცემი, რომელიც კომპონენტში ინახება და შეიძლება შეიცვალოს.

// hook არის სპეციალური ფუნქცია React-ში, რომელიც საშუალებას გაძლევს გამოიყენო: state

// built-in hook ნიშნავს React-ის უკვე ჩაშენებულ hook-ებს.

// useState არის hook, რომელიც გამოიყენება state-ის შესაქმნელად const [count, setCount] = useState(0);

// setter function არის ფუნქცია, რომელიც state-ს ცვლის.

// component re-render ნიშნავს, რომ React თავიდან „ხატავს“ კომპონენტს.

// 5) შექმენით Form.jsx კომპონენტი.
// კომპონენტში:
// - შექმენით <form> ელემენტი
// - გაუწერეთ onSubmit მოვლენის მსმენელი (handleSubmit)
// - ფორმაში გქონდეთ 4 input (ნებისმიერი ტიპის)
// - თითოეულ input-ს გაუწერეთ name ატრიბუტი

// handleSubmit ფუნქციაში:
// - გამოიყენეთ event.target.name.value
// - შექმენით ობიექტი ოთხივე მნიშვნელობით
// - დაბეჭდეთ ეს ობიექტი კონსოლში

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {
        name: form.name.value,
        email: form.email.value,
        age: form.age.value,
        password: form.password.value
        };
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="age" placeholder="Age" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
        </form>
    );
}

// 6) შექმენით Products კომპონენტი.
// გამოიყენეთ useState და useEffect.

// დავალება:
// - კომპონენტის პირველ render-ზე გააგზავნეთ მოთხოვნა:
// https://fakestoreapi.com/products
// - მიღებული მონაცემები შეინახეთ data მდგომარეობაში (საწყისი მნიშვნელობა [])
// - ეკრანზე გამოიტანეთ პროდუქტები map მეთოდის გამოყენებით

export default function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => setData(products));
    }, []);
    return (
        <div>
        <h1>Products</h1>
        {data.map((product) => (
            <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
            </div>
        ))}
        </div>
    );
}

// 7) შექმენით მდგომარეობა, რომელშიც შეინახავთ ხილების მასივს.
// - ღილაკზე დაჭერისას დაამატეთ "orange"
// - მეორე ღილაკზე დაჭერისას გაასუფთავეთ მასივი
// - გამოიტანეთ შედეგი ეკრანზე

export default function Fruits() {
    const [fruits, setFruits] = useState(["apple", "banana", "mango"]);
    const addOrange = () => {
        setFruits((prev) => [...prev, "orange"]);
    };
    const clearFruits = () => {
        setFruits([]);
    };
    return (
        <div>
        <h2>Fruits List</h2>
        <button onClick={addOrange}>Add Orange</button>
        <button onClick={clearFruits}>Clear</button>
        {fruits.map((fruit, index) => (
            <p key={index}>{fruit}</p>
        ))}
        </div>
    );
}

// 8) შექმენით მდგომარეობა მომხმარებლის ობიექტისთვის:
// {name: "Your name", password: "123"}

// - ღილაკზე დაჭერისას შეცვალეთ name მნიშვნელობა
// - მეორე ღილაკზე დაჭერისას დააბრუნეთ ობიექტი საწყის მდგომარეობაში

export default function User() {
    const User = {
        name: "Your name",
        password: "123"
    };
    const [user, setUser] = useState(initialState);
    const changeName = () => {
        setUser((prev) => ({...prev,name: "Giorgi" }));
    };
    const resetUser = () => {
        setUser(User);
    };
    return (
        <div>
        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Password: {user.password}</p>
        <button onClick={changeName}>Change Name</button>
        <button onClick={resetUser}>Reset</button>
        </div>
    );
}


// 9) შექმენით მდგომარეობა isLightMode (საწყისი მნიშვნელობა false).
// - შექმენით toggleTheme ფუნქცია
// - ღილაკზე დაჭერისას შეცვალეთ isLightMode
// - თუ isLightMode === false → background შავი
// - თუ true → background თეთრი
// გამოიყენეთ ternary operator და style ატრიბუტი

export default function Theme() {
    const [isLightMode, setIsLightMode] = useState(false);
    const toggleTheme = () => {
        setIsLightMode((prev) => !prev);
    };
    return (
        <div
        style={{
            background: isLightMode ? "white" : "black",
        }}>
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
        </div>
    );
}

// 10) App.jsx-ში შექმენით handleClick ფუნქცია.
// - გადასცით props-ად Parent კომპონენტს
// - Parent კომპონენტში გამოიძახეთ Child კომპონენტი
// - Child კომპონენტში ღილაკზე დაჭერისას გამოიძახეთ props-ით მიღებული handleClick ფუნქცია

export default function App() {
    const handleClick = () => {
        console.log("Button clicked!");
    };
    const Parent = ({ handleClick }) => {
        return (
        <div>
            <h2>Parent Component</h2>
            <Child handleClick={handleClick} />
        </div>
        );
    };
    const Child = ({ handleClick }) => {
        return (
        <div>
            <h3>Child Component</h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
        );
    };
    return (
        <div>
        <h1>App Component</h1>
        <Parent handleClick={handleClick} />
        </div>
    );
}

// 11) App.jsx-ში შექმენით isLoggedIn ცვლადი ( (true ან false).
// - გადასცით props-ად Header კომპონენტს
// - Header-იდან Nav კომპონენტს
// - Nav-იდან User კომპონენტს

// User კომპონენტში:
// - თუ isLoggedIn === true → დააბრუნეთ "Hello User"
// - სხვა შემთხვევაში → "Please log in to your account"

export default function App() {
    const isLoggedIn = true; 
    const Header = ({ isLoggedIn }) => {
        return (
        <header>
            <h1>Header Component</h1>
            <Nav isLoggedIn={isLoggedIn} />
        </header>
        );
    };
    const Nav = ({isLoggedIn}) => {
        return (
        <nav>
            <p>Nav Component</p>
            <User isLoggedIn={isLoggedIn} />
        </nav>
        );
    };
    const User = ({ isLoggedIn }) => {
        return (
        <div>
            {isLoggedIn
            ? "Hello User"
            : "Please log in to your account"}
        </div>
        );
    };
    return (
        <div>
        <Header isLoggedIn={isLoggedIn} />
        </div>
    );
}

// 12) შექმენით WindowResize კომპონენტი.
// გამოიყენეთ useState და useEffect.

// დავალება:
// - შექმენით მდგომარეობა windowWidth, რომლის საწყისი მნიშვნელობა იქნება window.innerWidth
// - შექმენით handleResize ფუნქცია, რომელიც განაახლებს windowWidth მდგომარეობას
// - useEffect-ში დაამატეთ resize eventListener
// - useEffect-ის cleanup ფუნქციის გამოყენებით წაშალეთ eventListener

// ეკრანზე გამოიტანეთ მიმდინარე ეკრანის სიგანე.

// კომენტარებში ახსენით:
// - რატომ არის resize eventListener გვერდითი ეფექტი (side effect)
// - როდის იძახება cleanup ფუნქცია
// - რა პრობლემა შეიძლება წარმოიშვას cleanup-ის გარეშე

export default function WindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []); 
    return (
        <div>
        <h2>Window Width: {windowWidth}px</h2>
        </div>
    );
}