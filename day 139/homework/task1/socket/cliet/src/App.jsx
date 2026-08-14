import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

function App() {
    const [messages, setMessages] = useState([]);

    const socket = io('http://localhost:3000')

    useEffect(() => {
        socket.on('receive', (msg) => {
        setMessages((prev) => [...prev, msg])
        })
    }) 

    function sendMessage() {
        socket.emit('msg', document.querySelector("input").value)
        document.querySelector("input").value = ""
    }

    return (
        <>
            <input type='text' placeholder='Message' />
            <button onClick={sendMessage}>Send</button>
            <div>
                {messages.map((msg) => {
                return <p>{msg}</p>
                })}
            </div>
        </>
    )
}

export default App