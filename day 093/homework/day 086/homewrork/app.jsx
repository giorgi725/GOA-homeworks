// შექმენით CounterContainer და CounterView კომპონენტები.
//    CounterContainer-ში გამოიყენეთ useState რიცხვისთვის.
//    შექმენით ფუნქცია, რომელიც ზრდის რიცხვს.
//    ეს state და ფუნქცია props-ით გადასცით CounterView-ს.
//    CounterView კომპონენტში უნდა იყოს:
//    - პარაგრაფი რიცხვის გამოსატანად
//    - ღილაკი, რომელიც props-ით მიღებულ ფუნქციას გამოიძახებს

export default function CounterView({ count, onIncrement }) {
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increase</button>
        </div>
    );
}

import { useState } from "react";

export default function CounterContainer({ count, increment}) {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <CounterView count={count} onIncrement={increment} />
    );
}

// 3) შექმენით ListCo   ntainer და ListView კომპონენტები.
//    ListContainer-ში state-ში გქონდეთ ელემენტების სია (array).
//    ListView კომპონენტს props-ით გადასცით სია.
//    ListView-ში სია უნდა დარენდერდეს map-ის გამოყენებით.
//    Container კომპონენტში არ უნდა იყოს JSX სიისთვის.

export default function ListContainer() {
    const [items] = useState(["Apple", "Banana", "Orange", "Mango"]);
    return <ListView items={items} />;
}

import { useState } from "react";

export default function ListView({ items }){
    return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
}

// 4) შექმენით ToggleContainer და ToggleView კომპონენტები.
//    ToggleContainer-ში state-ში შეინახეთ boolean მნიშვნელობა.
//    შექმენით ფუნქცია, რომელიც ცვლის მნიშვნელობას (true / false).
//    ToggleView-ში props-ით მიღებული მნიშვნელობის მიხედვით:
//    - გამოჩნდეს ტექსტი "ON" ან "OFF"
//    - ღილაკზე დაჭერისას გამოიძახოს გადმოცემული ფუნქცია
import { useState } from "react";

export default function ToggleContainer() {
    const [isOn, setIsOn] = useState(false);
    function toggle() {
        setIsOn(!isOn);
    }
    return <ToggleView isOn={isOn} onToggle={toggle} />;
}

export default function ToggleView({ isOn, onToggle }){
    return (
    <div>
        <p>{isOn ? "ON" : "OFF"}</p>
        <button onClick={onToggle}>Toggle</button>
        </div>
    );
}

// 5) შექმენით FormContainer და FormView კომპონენტები.
//    FormContainer-ში გამოიყენეთ useState ინფუთის მნიშვნელობისთვის.
//    შექმენით submit ფუნქცია.
//    FormView კომპონენტში უნდა იყოს:
//    - input
//    - ღილაკი
//    მონაცემები მიიღოს მხოლოდ props-ით.

import { useState } from "react";

export default function FormContainer() {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setValue("");
    }
    return (
        <FormView value={value} onChange={handleChange} onSubmit={handleSubmit} />
    );
}

export default function FormView({ value, onChange, onSubmit }) {
    return (
        <>
            <form>
                <input type="text" value={value} onChange={onChange}/>
                <button typeof="submit">submit</button>
            </form>
        </>
    )
}

// 6) შექმენით UserContainer და UserView კომპონენტები.
//    UserContainer-ში შეინახეთ state:
//    - name
//    - age
//    UserView კომპონენტს props-ით გადასცით ეს მონაცემები.
//    UserView-ში უნდა გამოჩნდეს ინფორმაცია ტექსტის სახით.

import { useState } from "react";

export default function UserContainer() {
    const [name] = useState("Giorgi");
    const [age] = useState(17);

    return <UserView name={name} age={age} />;
}

export default function UserView({ name, age }) {
    return (
        <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        </div>
    );
}

// 7) შექმენით InlineStyleContainer და InlineStyleView კომპონენტები.
//    InlineStyleContainer-ში შექმენით style ობიექტი JavaScript-ში.
//    ეს style props-ით გადასცით InlineStyleView-ს.
//    InlineStyleView-ში გამოიყენეთ inline styling:
//    - div ელემენტზე backgroundColor და padding
//    - ტექსტი გამოჩნდეს ცენტრში

export default function InlineStyleContainer() {
    const style = { backgroundColor: "red", textAlign: "center"};

    return <InlineStyleView style={style} />;
}

export default function InlineStyleView({ style }) {
    return (
        <div style={style}>
            <p>text</p>
        </div>
    );
}

// 8) შექმენით StyleObjectContainer და StyleObjectView კომპონენტები.
//    Container კომპონენტში აღწერეთ რამდენიმე style ობიექტი (მაგ: titleStyle, boxStyle).
//    props-ით გადასცით ისინი View კომპონენტს.
//    StyleObjectView-ში:
//    - გამოიყენეთ სხვადასხვა style ობიექტი სხვადასხვა ელემენტზე
//    - არ გამოიყენოთ className

export default function StyleObjectContainer() {
    const titleStyle = {color: "blue", textAlign: "center", margin: "10px"};

    const boxStyle = {backgroundColor: "blue", borderRadius: "10px", textAlign: "center"};
    return (
        <StyleObjectView titleStyle={titleStyle} boxStyle={boxStyle}/>
    );
    }
    export default function StyleObjectView({ titleStyle, boxStyle }) {
    return (
        <div>
            <h2 style={titleStyle}>Styled Title</h2>
            <div style={boxStyle}>box</div>
        </div>
    );
}

// 9) შექმენით ModuleStyleContainer და ModuleStyleView კომპონენტები.
//    შექმენით CSS Module ფაილი (მაგ: Card.module.css).
//    ModuleStyleView-ში გამოიყენეთ className={styles.className}.
//    Container კომპონენტში არ უნდა იყოს styling ლოგიკა.
//    View კომპონენტში უნდა იყოს:
//    - სათაური
//    - ტექსტი
//    - ღილაკი

// .container {
//   background-color: #f5f5f5;
//   text-align: center;
// }

// .title {
//   color: #333;
// }

// .text {
//   color: #d20000;
// }

// .button {
//   background-color: blue;
//   color: white;
// }

import ModuleStyleView from "./ModuleStyleView";

export default function ModuleStyleContainer() {
    return <ModuleStyleView />;
}

import styles from "./style.css";

export default function ModuleStyleView() {
    return (
        <div className={styles.container}>
        <h2 className={styles.title}>Citle</h2>
        <p className={styles.text}>description</p>
        <button className={styles.button}>Click</button>
        </div>
    );
}

// 10) შექმენით StylesheetContainer და StylesheetView კომპონენტები.
//    გამოიყენეთ ჩვეულებრივი CSS ფაილი (styles.css).
//    StylesheetView-ში გამოიყენეთ className.
//    Container კომპონენტში მხოლოდ მონაცემები და ლოგიკა უნდა იყოს.
//    View კომპონენტში:
//    - მინიმუმ ორი განსხვავებული styled ელემენტი

// .container {
//   padding: 20px;
//   background-color: #f0f0f0;
// }

// .title {
//   color: darkblue;
//   margin: 10px;
// }

// .button {
//   background-color: green;
//   color: white;
// }

import StylesheetView from "./StylesheetView";

export default function StylesheetContainer() {
    const title = "Hello";
    const buttonText = "Click";

    return <StylesheetView title={title} buttonText={buttonText} />;
}
import "./styles.css";

export default function StylesheetView({ title, buttonText }) {
    return (
        <div className="container">
        <h2 className="title">{title}</h2>
        <button className="button">{buttonText}</button>
        </div>
    );
}

// 11) შექმენით TailwindContainer და TailwindView კომპონენტები.
//    TailwindView-ში გამოიყენეთ Tailwind CSS კლასები.
//    props-ით მიიღეთ ტექსტი Container-დან.
//    Tailwind კლასებით:
//    - შექმენით card მსგავსი layout
//    - გამოიყენეთ padding, margin, rounded, bg-color

import TailwindView from "./TailwindView";

export default function TailwindContainer() {
    const text = "This is a Tailwind Card";

    return <TailwindView text={text} />;
}

export default function TailwindView({ text }) {
    return (
        <div className="flex justify-center">
        <div className="bg-white p-6 rounded-2xl ">
            <h2 className="text-xl ">Card Title</h2>
            <p className="text-gray-600 mb-4">{text}</p>
            <button className="bg-blue-500 text-white ">
            Click 
            </button>
        </div>
        </div>
    );
}

// 12) შექმენით MixedStylesContainer და MixedStylesView კომპონენტები.
//    გამოიყენეთ ერთ კომპონენტში:
//    - inline style
//    - CSS Module
//    - Tailwind CSS
//    Container-ში არ უნდა იყოს JSX სტილებისთვის.
//    View კომპონენტში მკაფიოდ გამოჩნდეს რომელი სტილი სად გამოიყენება.

// .moduleBox {
//   border: 2px solid red;
//   padding: 10px;
//   text-align: center;
// }

import MixedStylesView from "./MixedStylesView";

export default function MixedStylesContainer() {
    const title = "Mixed Styles";

    return <MixedStylesView title={title} />;
}

import styles from "./MixedStyles.module.css";

export default function MixedStylesView({ title }) {
    const inlineBox = {
        backgroundColor: "lightblue",
        padding: "10px",
        marginBottom: "10px",
        textAlign: "center"
    };
    return (
        <div className="p-6 bg-gray-100 ">\
            <h1 className="text-2xl font-bold text-center">{title} (Tailwind)</h1>
            <div style={inlineBox}>inline Style Box</div>
            <div className={styles.moduleBox}>CSS Module Box</div>
        </div>
    );
}