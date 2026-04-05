export default function App() {
    const [user,setUser] = useState("")
    const [pass, setPass] = useState("")

    return (
        <>
            <input onChange={(e) => setUser(e.target.value)} name="username" type="text" placeholder="Username" value={user}/>
                <input onChange={(e) => setPass(e.target.value)} name="password" type="password" placeholder="Password" value={pass} /> 
            </>
    )
}

export default function form() {
    const [formstate, setformstate] = useState({})
    const handleChange =({name,value }) => {
        setformstate((prev) => {
            return {...prev, [name]: value}
        })
    }
    return (
        <>
            <input onChange={(e) => handleChange(e.target)} name="username" type="text" placeholder="Username" value={formstate.username}/>
                <input onChange={(e) => handleChange(e.target)} name="password" type="password" placeholder="Password" value={formstate.password} /> 
            </>
    )
}

import { useEffect, useState } from "react";
export default function App() {
    const [url, setUrl] = useState("todos")
    const [data, setData] = useState([])
    useEffect(() => {
        async function getdata() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const info = await response.json()
            setData(info)
        }
        getdata()
    }, [url])

    return (
        <>
            <button onClick={() => setUrl("posts")}>posts</button>
            <button onClick={() => setUrl("albums")}>albums</button>
            <button onClick={() => setUrl("todos")}>todos</button>
            <ul>
                {data.map((value, index) => <li key={index}>{value.title}</li>)}
            </ul>
        </>
    )
}

function app() {
    const [currentWidth, setcurrentWidth] = useState(500)
    useEffect(() => {
        document.addEventListener("resize", () => {
            setcurrentWidth(currentWidth)
        })
    })
    return (
        <>
            <p>{currentWidth}</p>
        </>
    )
}