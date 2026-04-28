import React, { useContext } from "react";
import { OtherContext } from "./homework1";

export default function Child() {
    const { theme } = useContext(OtherContext);
    return (
        <div>
        <h2>Current Theme: {theme}</h2>
        </div>
    );
}

/*
როგორ აცილებს props drilling-ს?
- useContext გვაძლევს საშუალებას პირდაპირ მივიღოთ მონაცემი Context-იდან
- აღარ გვჭირდება parent - child - child გზით props-ის გადაცემა
- ნებისმიერი კომპონენტი, რომელიც Provider-ის შიგნით არის, პირდაპირ წვდება მონაცემს
- კოდი ხდება უფრო მარტივი და ნაკლებად დამაბნეველი
*/