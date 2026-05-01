import React,{ useState } from 'react'

export default function Component1 () {
    const [name, setName] = useState("gio")
    const [error, setError] = useState(false)

    function wtfmann(){
        if (error) {
        throw new Error("error")
        }
    }
    
    return (
        <div className="component">
            <h1 onClick={() => setError(true)}>Component 1</h1>
            <Component2/>
        </div>
    )
}