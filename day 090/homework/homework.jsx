// 2) ახსენით რას ნიშნავს props drilling.
// კომენტარებში დაწერეთ:
// - რა პრობლემას ქმნის props drilling
// - რომელ შემთხვევაში ხდება იგი ხშირად

// Props drilling არის როცა props გადაეცემა რამდენიმე ზედმეტი კომპონენტის გავლით,
// მხოლოდ იმისთვის, რომ მიაღწიოს ქვედა კომპონენტს.

// - კოდი ხდება რთულად წასაკითხი და გასაგები
// - unnecessary props გადაცემა ხდება
// - რთულდება maintenance და refactoring
// - bug-ების პოვნა უფრო რთული ხდება

// - როცა აპლიკაცია დიდია და კომპონენტები ღრმადაა ჩაშენებული
// - როცა state არის მაღლა და ქვედა კომპონენტს სჭირდება
// - როცა არ გამოიყენება Context API ან state management 


// 4) შექმენით UserContext context-ი.
// App.jsx-ში:
// - გააკეთეთ UserContext.Provider
// - value-ში გადაეცით user ობიექტი

// Component3-ში მიიღეთ მონაცემი useContext-ის გამოყენებით.
// კომენტარებში ახსენით:
// - რა პრობლემა მოგვარდა Context-ის გამოყენებით
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

import React, { useState } from "react";
import Component1 from "./Component1";
import UserContext from "./UserContext";

function App() {
    const [user, setUser] = useState({ name: "Luka", age: 20 });

    return (
        <UserContext.Provider value={user}>
        <Component1 />
        </UserContext.Provider>
    );
}

export default App;


// 5) შექმენით AuthContext:
// AuthContext უნდა შეიცავდეს:
// - email
// - password

// შექმენით AuthProvider კომპონენტი და გამოიყენეთ .Provider.
// App.jsx-ში:
// - 3-ჯერ გამოიყენეთ AuthProvider
// - ყოველ ჯერზე გადაეცით სხვადასხვა email და password

// შიგნით გამოიძახეთ AuthConsumer კომპონენტი.
// კომენტარებში ახსენით რატომ არის Context კარგი მსგავსი მონაცემებისთვის

//   props drilling-ის მინუსი:
//   როცა მონაცემი გადის ბევრ შუალედურ კომპონენტში,
//   კოდი ხდება რთული და გადატვირთული (unnecessary props)

//   Context API-ის უპირატესობა:
//   საშუალებას გვაძლევს მონაცემი გავაზიაროთ პირდაპირ საჭირო კომპონენტში,
//   props გადაცემის გარეშე (გვიშორებს props drilling-ს)

//   როდის ჯობს props გამოყენება:
//   როცა მონაცემი გადაეცემა მხოლოდ 1-2 დონეზე (არ არის ღრმა სტრუქტურა)
//   პატარა კომპონენტებში, სადაც Context-ის გამოყენება ზედმეტია
//   როცა გვინდა კოდი იყოს მარტივი და ზედმეტი abstraction არ გვქონდეს