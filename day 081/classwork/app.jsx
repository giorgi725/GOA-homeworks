export default function app() {
    const [username, setUser] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault();
        setUser(e.target.elements.username.value)
    }
    if(!username){
        return (
        <>
            <form onClick={handlesubmit}>
                <input placeholder="Username" type="text" name="username" />
                <button type="submit">submit</button>
            </form>
        </>
        )
    } else {
        return(
            <>
                <h2>Welcome {username}</h2>
            </>
        )
    }
}
function app() {
    const [task, setTask] = useState("")
    const handlesubmit = (e) => {
        e.prebentdefault();
        let newTask = e.target.elements.username.value
        setTask((prev) => [...prev, newTask])
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input placeholder="task" name="username" />
                <button type="submit">add</button>
            </form>
            <h1>tasks</h1>
            <ul>
                {task.map((value, index) => (<li onClick={() => setTask(task.filter((_, i) => index !== i))} key={index}>{value}</li>))}
            </ul>
        </>
    )
    
}