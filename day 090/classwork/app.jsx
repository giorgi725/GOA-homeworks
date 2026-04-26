import { createContext, useState } from "react";

export const nameContest = createContext()

export default function component1() {
    const [name, setName] = useState("gio")

    return (
        <div className="component">
            <h2>component 1</h2>
            <nameContest.Provider value={name}>
                <component2 />
            </nameContest.Provider>
        </div>
    )
}


import { createContext, useContext } from "react";
import component, { nameContest } from "./component1";

export default function component2(){
    const {value} = useContext(nameContest)
    return (
        <div className="component">
            <h2>Component 2</h2>
            <p>Username : {value}</p>
        </div>
    )
}

