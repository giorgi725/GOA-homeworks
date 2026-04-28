import React, { useState } from "react";
import { OtherContext } from "./homework1";

export default function NestedProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <OtherContext.Provider value={{ theme, setTheme }}>
        {children}
        </OtherContext.Provider>
    );
}

/*
რატომ არის wrapper კომპონენტი კარგი მრავალი Provider-ისთვის?
- თავიდან გვარიდებს კოდის გადატვირთვას 
- კოდი ხდება უფრო სუფთა და readable
- ყველა global state ერთ ადგილზე არის შეკრებილი
- მარტივია მართვა და ცვლილება
- reusableა — შეგიძლია იგივე wrapper გამოიყენო სხვადასხვა ნაწილში
*/