export default function App() {
    const [accounts, setAccounts] = useState([]);
    const [loggeduser, setLoggedUser] = useState(null);
    const [students, setstudents] = useState([])
    useEffect(() => {
        setAccounts(JSON.parse(localStorage.getItem("accounts") || "[]"));
        setLoggedUser(JSON.parse(localStorage.getItem("loggeduser") || "null"));
        setstudents(JSON.parse(localStorage.getItem("student") || "[]"));
    }, []);
    const handleForm = (e) => {
        e.preventDefault();
        const account = {
        username: e.target.username.value,
        password: e.target.password.value
        };
        const alreadyExists = accounts.some(acc => acc.username === account.username);
        if (alreadyExists) {
        alert("already taken");
        return;
        }
        setAccounts((prev) => {
        const newAccounts = [...prev, account];
        localStorage.setItem("accounts", JSON.stringify(newAccounts));
        return newAccounts;
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const correctInfo = accounts.some(acc => acc.username === username & acc.password === password);
        if (correctInfo) {
        setLoggedUser(username);
        localStorage.setItem("loggeduser", JSON.stringify(username));
        } 
    };
    const addstudent = (e) => {
        e.preventDefault();
        const studentname = e.target.student.value
        const studentgrade = e.target.student.value
        const studentclass = e.target.student.value

        setstudents((prev) => [...prev, studentname, studentgrade, studentclass])
        localStorage.setItem(JSON.stringify)
    }
    if (loggeduser) {
        return (
        <>
            <h1>Greeting, {loggeduser}!</h1>
            <button onClick={() => {
                setLoggedUser(null);
                localStorage.setItem("loggeduser", null);
            }}>Log out</button>
            <form onSubmit={addStudent}>
                <input type="text" placeholder="student name" name="student" />
                <input type="text" placeholder="grade" name="grade" />
                <input type="text" placeholder="class" name="class" />
                <button type="submit">Send</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Grade</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.studentname}</td>
                            <td>{student.studentgrade}</td>
                            <td>{student.studentclass}</td>
                            <td>
                                <button onClick={() => setstudents(prev => prev.filter((_, i) => i !== index))}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        );
    }
    return (
        <>
        <h2>Register</h2>
        <form onSubmit={handleForm}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        </>
    );
}