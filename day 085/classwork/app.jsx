import './app.css'
import { use, useEffect, useState } from 'react';

// container - არ არი ფოკუსირებული jsx-ის დაბრუნებაზე,მისი მთავარი ამოცანაა გამოთვლების შესრულება და მონაცემების წამოღება და საბოლოოდ რაიმე presentational კომპონენტის გამოძახება რომელიც გადასცემს თავის ინფორმაციას props-ის საშვალებით
// presentational - კომპონენტი რომელიც უბრალოდ იღებს ინფორმაციას და არენდერებს შედეგს და გამოაქვს ვიზუალურად მონაცემები
const mystyle={
    backgroundColor: "red",
    color:"black"  
}
function presentional({productinfo}) {
    return (
        <div className="product" style={ {backgroundColor: "red", border:"3px solid red"} }>
            <h2>title: {productinfo.title} style={mystyle}</h2>
            <p>price: {productinfo.price}$</p>
            <p>desc: {productinfo.description}</p>
            <p>category: {productinfo.category}</p>
            <p>rate: {productinfo.rating.rate}</p>
            <p>rate: {productinfo.rating.count}</p>
            <hr />
        </div>
    )
}

export default function app(){
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)
    useEffect (() => {
        async function fetchinfo(params) {
            const responses = await fetch("")
            const data = await responses.json()
            setProducts(data)
            setloading(false)
        }
        fetchinfo()
    },[])
    if(loading) {
        return<p>loading...</p>
    }
    return(
        <div className="productss">
            {products.map((products, index) => (
                (<presentional productinfo={products} index={index}/>)
            ))}
        </div>
    )
}

import { useEffect, useState } from "react";
import App from "./App";

export default function app(){
    if (loggeduser) {
        return (
            <>
                <h1>Greeting, {loggeduser}!</h1>
                <button onClick={() => {
                    setLoggedUser(null);
                    localStorage.setItem("loggeduser", "null");
                }}>
                    Log out
                </button>
                <form onSubmit={addstudent}>
                    <input name="student" placeholder="student name" />
                    <input name="grade" placeholder="grade" />
                    <input name="class" placeholder="class" />
                    <button>Send</button>
                </form>
                <table border="1">
                    <tbody>
                        {students.map((s, i) => (
                            <tr key={i}>
                                <td>{s.studentname}</td>
                                <td>{s.studentgrade}</td>
                                <td>{s.studentclass}</td>
                                <td>
                                    <button onClick={() =>
                                        setstudents(prev => prev.filter((_, idx) => idx !== i))
                                    }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}$</p>
                            <img src={product.images[0]} width="100" />
                        </div>
                    ))}
                </div>
            </>
        );
    }
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleForm}>
                <input name="username" placeholder="Username" required />
                <input name="password" type="password" placeholder="Password" required />
                <button>Register</button>
            </form>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input name="username" placeholder="Username" required />
                <input name="password" type="password" required />
                <button>Login</button>
            </form>
        </>
    );
}