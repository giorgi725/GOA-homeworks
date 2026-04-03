// 2) შექმენით Counter კომპონენტი useState-ის გამოყენებით.
//    - საწყისი მნიშვნელობა იყოს 0
//    - დაამატეთ ღილაკი "Increment"
//    - ღილაკზე დაჭერისას რიცხვი უნდა გაიზარდოს 1-ით

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <h2>{count}</h2>
        </div>
    )
}

// 3) დაამატეთ Counter-ში მეორე ღილაკი "Decrement".
//    - ღილაკზე დაჭერისას რიცხვი უნდა შემცირდეს 1-ით

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <h2>{count}</h2>
        </div>
    )
}

// 4) შექმენით კომპონენტი, სადაც გამოიყენებთ useState ტექსტისთვის.
//    - დაამატეთ input ველი
//    - რაც მომხმარებელი ჩაწერს, ის ტექსტი გამოჩნდეს ქვემოთ პარაგრაფში

export default function text() {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" value={text}onChange={(e) => setText(e.target.value)}/>
            <p>{text}</p>
        </div>
    );
}

// 5) შექმენით Toggle კომპონენტი useState-ის გამოყენებით.
//    - საწყისი მნიშვნელობა იყოს false
//    - ღილაკზე დაჭერისას მნიშვნელობა შეიცვალოს true/false
//    - ტექსტად გამოიტანეთ "ON" ან "OFF"

export default function Toggle() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <button onClick={handleToggle}>
                Toggle
            </button>
            <h2>{isOn ? "ON" : "OFF"}</h2>
        </div>
    );
}

// 6) შექმენით კომპონენტი, რომელიც შეინახავს რიცხვების მასივს useState-ში.
//    - დაამატეთ ღილაკი "Add Number"
//    - ყოველ დაჭერაზე დაემატოს ახალი რიცხვი მასივში (მაგ: 1,2,3...)
//    - გამოიტანეთ ეს რიცხვები სიად

export default function Number() {
    const [number, setNumber] = useState([])
    const addNumber = () => {
    const newNumber = number.length + 1;
        setNumber([...number, newNumber]);
    };
    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {number.map((num, index) => (
                <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

// 7) შექმენით კომპონენტი ობიექტის useState-ით.
//    - state-ში შეინახეთ user ობიექტი (name, age)
//    - დაამატეთ ღილაკი, რომელიც შეცვლის name-ს
//    - გამოიტანეთ ახალი მნიშვნელობა ეკრანზე

export default function User() {
    const [user, setUser] = useState({
        name: "Giorgi",
        age: 17,
    });
    const changeName = () => {
        setUser({
        ...user,
        name: "Nika",
        });
    };
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h3>Age: {user.age}</h3>
            <button onClick={changeName}>
                Change Name
            </button>
        </div>
    );
}

// 8) შექმენით მარტივი ფორმა useState-ის გამოყენებით.
//    - ორი input: name და email
//    - state-ში შეინახეთ ორივე მნიშვნელობა
//    - გამოიტანეთ ეს მონაცემები ქვემოთ

export default function User() {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
        <input type="email" name="email" value={form.email} onChange={handleChange}/>
        <h3>Name: {form.name}</h3>
        <h3>Email: {form.email}</h3>
        </div>
    );
}

// 9) შექმენით Counter, რომელსაც ექნება Reset ფუნქცია.
//    - დაამატეთ ღილაკი "Reset"
//    - დაჭერისას count დაბრუნდეს 0-ზე

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count === 0)}>
                Reset
            </button>
            <button onClick={() => setCount(0)}>
                Decrement
            </button>
            <h2>{count}</h2>
        </div>
    )
}